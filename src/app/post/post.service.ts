import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class PostService {
  constructor(private http: Http) { }
  getAll() {

     console.log ('LINK TRYING TO BE OPENED from post.service: ' +  'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json');


    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&format=json')
      .map((res: Response) => res.json());
  }
}
