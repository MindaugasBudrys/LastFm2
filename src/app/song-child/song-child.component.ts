import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import {Song} from '../song/song';
import {SongService} from '../song/song.service';
import {Post} from '../post/post';

@Component({
  selector: 'app-song-child',
  templateUrl: './song-child.component.html',
  styleUrls: ['./song-child.component.css']
})
export class SongChildComponent implements OnInit {


  @Input() songToFind = new Post();
  @Output() onClicked = new EventEmitter<boolean>();

  public song_info = new Song();

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.songService.getAll(this.songToFind.artist.name, this.songToFind.name ).subscribe(
        data => { this.song_info = data.track; },
        error => console.log(error)
    );
  }

  clicked(toDisplay: boolean){
    this.onClicked.emit(toDisplay);
    console.log("BUTTON WAS CLICKED inside song-child component" + toDisplay);
  }


}
