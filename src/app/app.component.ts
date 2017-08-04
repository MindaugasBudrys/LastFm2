import { Component } from '@angular/core';
import { PostService } from './post.service';
import { PostComponent } from './post/post.component';
import { ArtistService} from './artist.service';
import { ArtistComponent} from './artist/artist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService, ArtistService]
})
export class AppComponent {
  title = 'app works!!!!';
}
