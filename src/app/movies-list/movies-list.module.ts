import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieComponent } from "./movie/movie.component";

import { MoviesListComponent } from "./movies-list.component";

const routes: Routes = [
  {
    path: 'all',
    component: MoviesListComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];

@NgModule({
  declarations: [
      MoviesListComponent,
      MovieComponent
   ],
  imports: [ 
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesListModule { }