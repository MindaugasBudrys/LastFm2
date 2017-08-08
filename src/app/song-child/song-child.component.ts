import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {Song} from '../song/song';
import {SongService} from '../song/song.service';

@Component({
  selector: 'app-song-child',
  templateUrl: './song-child.component.html',
  styleUrls: ['./song-child.component.css']
})
export class SongChildComponent implements OnInit {


  @Input() hero: Hero;
  @Input() masterName: string; // @Input('xxxxxx')    -   'xxxxxx' in song-parent.component.html

  public song_info: Song;

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getAll(this.hero.name, this.hero.lastname ).subscribe(
        data => { this.song_info = data.track; },
        error => console.log(error)
    );

  }

}
