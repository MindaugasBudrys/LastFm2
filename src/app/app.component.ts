import { Component } from '@angular/core';
import { PostService } from './post/post.service';
import { ArtistService} from './artist/artist.service';
import { SongService } from './song/song.service';
import { SearchService } from './search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService, ArtistService, SongService, SearchService]
})
export class AppComponent {
  title = 'LAST FM API';
}
