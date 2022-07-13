import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/utils/interfaces/movie';
import { Requests } from 'src/app/utils/services/requests.component';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { ScoreRequest } from 'src/app/utils/requests/score-request';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private requests: Requests) { }

  movie: Movie = {};
  movieId = 0;
  score: ScoreRequest = {};

  ngOnInit() {
    this.movieId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getMovie(this.movieId);
  }

  form = new FormGroup({
    rating: new FormControl('', Validators.required),
    email:  new FormControl('', Validators.required)
  });

  getMovie(movieId: number) : void {
    this.requests.getMovieById(movieId).subscribe(movie => this.movie = movie);
  }

  submit() : void {
    var email = this.form.value.email;
    var rating = this.form.value.rating;

    this.score.email = email
    this.score.score = rating;
    this.score.movieId = this.movieId;
    console.log(this.score);
  }

  goBack() : void {
    this.router.navigateByUrl('movies/all')
  }

}
