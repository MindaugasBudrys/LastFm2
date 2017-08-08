import { Component, OnInit } from '@angular/core';
import { HEROES } from '../hero';

@Component({
  selector: 'app-song-parent',
  templateUrl: './song-parent.component.html',
  styleUrls: ['./song-parent.component.css']
})
export class SongParentComponent implements OnInit {

    heroes = HEROES;
    master = 'Master';


  constructor() { }

  ngOnInit() {
  }

}
