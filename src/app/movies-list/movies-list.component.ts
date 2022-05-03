import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() : void {}

  previusMoviesList() : void {
    console.log("Previus List");    
  }

  nextMoviesList() : void {
    console.log("Next List");
  }

  selectMovie() : void {
    this.router.navigate(['/movies/movie', 1])
  }   

}
