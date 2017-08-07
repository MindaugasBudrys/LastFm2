import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SongService {
  constructor(private http: Http) { }
  getAll(artist_name: string, song_name: string) {
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&artist=' + artist_name + '&track= ' + song_name + '&format=json')
      .map((res: Response) => res.json());
  }
}
