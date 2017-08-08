import { Component, OnInit } from '@angular/core';
//import { Post } from '../post/post';
import { Song } from '../song/song';
import { SongService} from '../song/song.service';

@Component({
  selector: 'app-song-child',
  templateUrl: './song-child.component.html',
  styleUrls: ['./song-child.component.css'],
  inputs: [this.artist_name, this.song_name]
})
export class SongChildComponent implements OnInit {


  public artist_name: string;
  public song_name: string;

  public song: Song;

  constructor(private songService: SongService) { }

  ngOnInit() {

    this.songService.getAll(this.artist_name, this.song_name).subscribe(
      data => { this.song = data.track; },
      error => console.log(error)
    );


  }

}
