import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
//http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=baa6c1bc56fb80f22b9dec1e9b0b2352&artist=Linkin+Park&track=One+Step+Closer&format=json
export class SongComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
