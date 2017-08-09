import { Component, OnInit } from '@angular/core';
import { RANDOM_SONGS } from '../hero';

@Component({
  selector: 'app-song-parent',
  templateUrl: './song-parent.component.html',
  styleUrls: ['./song-parent.component.css']
})
export class SongParentComponent implements OnInit {

    post_songs = RANDOM_SONGS;
    master = 'Master';


  constructor() { }

  ngOnInit() {
  }

}
