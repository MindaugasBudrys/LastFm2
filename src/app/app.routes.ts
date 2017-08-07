import { Routes } from '@angular/router';

// import { AppComponent} from './app.component';
import { PostComponent} from './post/post.component';
import { ArtistComponent} from './artist/artist.component';

export const routes: Routes = [
  { path: '', component: PostComponent },
  //{ path: 'artist/:ARTIST_ID', component: ArtistComponent }

  { path: 'artist', component: ArtistComponent }
];


