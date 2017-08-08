import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-song-child',
  templateUrl: './song-child.component.html',
  styleUrls: ['./song-child.component.css']
})
export class SongChildComponent implements OnInit {

  
  @Input() hero: Hero;
  @Input('master') masterName: string;



  constructor() { }

  ngOnInit() {


  }

}
