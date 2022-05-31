import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  public page: number = 0;
  public totalPage: number = 0;

constructor() {}

}
