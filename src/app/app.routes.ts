import { Routes } from '@angular/router';

import { AppComponent} from './app.component';
import { ArtistComponent} from './artist/artist.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'artist', component: ArtistComponent }
];


