import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ArtistService {
  constructor(private http: Http) { }
  getAll() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=f59c5520-5f46-4d2c-b2c4-822eabf53419&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json')
      .map((res: Response) => res.json());
  }
}
