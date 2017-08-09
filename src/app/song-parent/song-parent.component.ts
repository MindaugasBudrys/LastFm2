import { Component, OnInit } from '@angular/core';
import { RANDOM_SONGS } from '../post/post';

@Component({
  selector: 'app-song-parent',
  templateUrl: './song-parent.component.html',
  styleUrls: ['./song-parent.component.css']
})
export class SongParentComponent implements OnInit {

    random_songs = RANDOM_SONGS;
    master = 'Master';


  constructor() { }

  ngOnInit() {
  }

}
