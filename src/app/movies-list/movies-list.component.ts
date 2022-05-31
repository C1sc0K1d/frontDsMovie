import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../utils/interfaces/movie';
import { MovieListService } from '../utils/services/movie-list.service';
import { Requests } from '../utils/services/requests.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private router: Router, private requests: Requests, public service: MovieListService ) {}

  movies: Movie[];
  totalPages = this.service.totalPage;
  nextDisabled: boolean;
  previuslyDisabled: boolean;

  ngOnInit() : void {
    this.getMovies(this.service.page);
    this.allowNextAndPreviouslyButtons();
  }

  allowNextAndPreviouslyButtons() : void {
    this.previuslyDisabled = ((this.service.page) === 0 ? true : false);
    this.nextDisabled = ((this.service.page + 1) === this.totalPages ?  true : false);   
  }

  previusMoviesList() : void {
    if (this.service.page !== 0) {
      this.getMovies(this.service.page - 1);      
      --this.service.page;
    }
    this.allowNextAndPreviouslyButtons();
  }

  nextMoviesList() : void {
    if (this.service.page + 1 !== this.totalPages) {
      this.getMovies(this.service.page + 1);
      ++this.service.page;
    }
    this.allowNextAndPreviouslyButtons();
  }

  selectMovie(id: number) : void {
    this.router.navigate(['/movies/movie', id]);
  }
 
  getMovies(page: number) : void {
    this.movies = [];
    this.requests.getAllMovies(page).subscribe(mvs => {
      this.service.totalPage = this.totalPages = mvs.totalPages;
      this.movies = mvs.content;
    });
  }

  ratting(star: number, ratte: number) : boolean {
    ratte = Math.floor(ratte);
    if (ratte === star) {
      return true;
    } else {
      return false;
    }
  }

}
