import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { SearchService } from '../search/search.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  topChartResults = new Array<Post>();
  searchSongResults = new Array<Post>();
  searchMovieResults = new Array<Movie>();



  displayTop: boolean = true;
  searchString: string = '';

  constructor(private postService: PostService, 
              private searchService: SearchService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(
      data => { this.topChartResults = data.tracks.track; },
      error => console.log(error)
    );
  }

  onClicked(stringToSearch: string, typeToSearch: string) {

    if(typeToSearch == 'songs')
      {
        this.searchService.searchTrack(stringToSearch).subscribe(
          data => { this.searchSongResults = data.results.trackmatches.track; },
          error => console.log(error)
        )

        //disables top chart results if searched for song
        this.displayTop = false;

        this.searchMovieResults = null;

        console.log('post component search event triggered with string: ' + stringToSearch + '. also searchString is: ' + this.searchString);
      }
    else if (typeToSearch == 'movies')
      {
        this.searchService.searchMovie(stringToSearch).subscribe(
          data => { this.searchMovieResults = data.results; },
          error => console.log(error)
        )

        //disables top chart results if searched for song
        this.displayTop = false;

        this.searchSongResults = null;
        console.log('post component search event triggered with string: ' + stringToSearch + '. also searchString is: ' + this.searchString);
      }


    
  }
}
