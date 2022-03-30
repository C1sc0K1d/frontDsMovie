import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MoviesListComponent } from "./movies-list.component";

const routes: Routes = [
  {
    path: 'all',
    component: MoviesListComponent,
  }
];

@NgModule({
  declarations: [
      MoviesListComponent
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