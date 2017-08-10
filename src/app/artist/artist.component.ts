import { Component, OnInit } from '@angular/core';
import {Artist} from './artist';
import {ArtistService} from './artist.service';
import {ActivatedRoute} from '@angular/router';
import { Song } from '../song/song';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public id;

  public artist_info: Artist;
  public topSongs = new Array<Song>();

  constructor(private artistService: ArtistService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    
    this.activatedRoute.params.subscribe(params => {
      this.id = params['artist_mbid'];
        this.artistService.getAll(this.id).subscribe(
        data => { this.artist_info = data.artist; },
        error => console.log(error)
      );
    });



    this.artistService.getTopTracks(this.id).subscribe(
        data => { this.topSongs = data.toptracks.track; },
        error => console.log(error)
    );


    
  }

}
