import { Component, OnInit } from '@angular/core';
import { RANDOM_SONGS } from '../hero';

@Component({
  selector: 'app-song-parent',
  templateUrl: './song-parent.component.html',
  styleUrls: ['./song-parent.component.css']
})
export class SongParentComponent implements OnInit {


    nameList = RANDOM_SONGS;


  constructor() { }

  ngOnInit() {
  }

}
