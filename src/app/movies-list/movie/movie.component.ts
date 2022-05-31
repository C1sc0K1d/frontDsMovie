import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/utils/interfaces/movie';
import { Requests } from 'src/app/utils/services/requests.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private requests: Requests) { }

  movie: Movie;

  ngOnInit() {
    var movieId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getMovie(movieId);
  }

  getMovie(movieId: number) : void {
    this.requests.getMovieById(movieId).subscribe(movie => this.movie = movie);
  }

  goBack() : void {
    this.router.navigateByUrl('movies/all')
  }

}
