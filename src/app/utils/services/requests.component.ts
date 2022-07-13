import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie, MoviePage } from '../interfaces/movie';
import { MessageService } from 'src/message.service';
import { ScoreRequest } from '../requests/score-request';

@Injectable({
  providedIn: 'root'
})
export class Requests {
  url = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService ) { }

  getAllMovies(page: number) : Observable<MoviePage> {
    return this.http.get<MoviePage>(`${this.url}/movies?size=8&page=${page}`).pipe(tap(), catchError(this.handleError<MoviePage>('getAllMovies')));
  }

  getMovieById(id: number) : Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/movies/${id}`).pipe(tap(), catchError(this.
      handleError<Movie>('getMovieById')))
  }

  setScore(score: ScoreRequest) : Observable<any> {
    return this.http.put(`${this.url}/score`, score, this.httpOptions).pipe(tap(), catchError(this.handleError<any>('setScore')));
  }

  private handleError<T>(operation: string, result?: T): any {
    return(error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    this.messageService.add(`${message}`);
  }
}
