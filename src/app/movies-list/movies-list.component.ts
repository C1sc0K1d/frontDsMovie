import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor() {}

  ngOnInit() : void {}

  previusMoviesList() : void {
    console.log("Previus List");    
  }

  nextMoviesList() : void {
    console.log("Next List");
    
  }

}
