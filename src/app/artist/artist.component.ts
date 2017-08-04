import { Component, OnInit } from '@angular/core';
import {Artist} from '../artist';
import {ArtistService} from '../artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  results: Array<Artist>;
  constructor(private artistService: ArtistService) { }
  ngOnInit() {
    this.artistService.getAll().subscribe(
      data => { this.results = data; },
      error => console.log(error)
    );
  }

}
