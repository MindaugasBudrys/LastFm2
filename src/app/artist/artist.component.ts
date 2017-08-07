import { Component, OnInit } from '@angular/core';
import {Artist} from '../artist';
import {ArtistService} from '../artist.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public id;

  public artist: Artist;

  constructor(private artistService: ArtistService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    
    this.activatedRoute.params.subscribe(params => {
      this.id = params['artist_mbid'];
        this.artistService.getAll(this.id).subscribe(
        data => { this.artist = data.artist; },
        error => console.log(error)
      );
    });
    
  }

}
