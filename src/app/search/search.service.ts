import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }
  
  searchTrack(song_name: string){

    var str = song_name;
    var replaced_song_name = str.split(' ').join('+');

    console.log ('LINK TRYING TO BE OPENED from search service' +  'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + replaced_song_name + '&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json');
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + replaced_song_name + '&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json')
      .map((res: Response) => res.json());
  }

  searchMovie(movie_title: string){

    var str = movie_title;
    var replaced_movie_title = str.split(' ').join('+');

    console.log ('LINK TRYING TO BE OPENED from search service' +  'https://api.themoviedb.org/3/search/movie?api_key=c658f872e7912d76e89468e186549674&language=en-US&page=1&include_adult=false&query=' + replaced_movie_title);
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=c658f872e7912d76e89468e186549674&language=en-US&page=1&include_adult=false&query=' + replaced_movie_title)
      .map((res: Response) => res.json());
  }


}
