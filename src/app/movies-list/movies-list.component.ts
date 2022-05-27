import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MoviePage } from '../utils/interfaces/movie';
import { Requests } from '../utils/services/requests.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private router: Router, private requests: Requests ) {}

  movies: Movie[];
  page = 0;
  rt = {
    one: false,
    two: false,
    tree: true,
    four: false,
    five: false
  }

  ngOnInit() : void {
    this.getMovies(this.page);
  }

  previusMoviesList() : void {
    console.log("Previus List");    
  }

  nextMoviesList() : void {
    console.log("Next List");
  }

  selectMovie() : void {
    this.router.navigate(['/movies/movie', 1])
  }
 
  getMovies(page: number) : void {
    this.requests.getAllMovies(page).subscribe(mvs => {
      this.movies = mvs.content;
    });
  }

  ratting(star: number, ratte: number, movie: string) : boolean {
    ratte = Math.floor(ratte);
    console.log(ratte + " : " + star + " : movie : " + movie);
    if (ratte === star) {
      console.log(true);
      return true;
    } else {
      return false;
    }
 
  }
}
