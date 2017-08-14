import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
  constructor(private http: Http) { }
  getAll() {
    console.log('Movies service called for top movies');
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=c658f872e7912d76e89468e186549674&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1')
      .map((res: Response) => res.json());
  }
}
