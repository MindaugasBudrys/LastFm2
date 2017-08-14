import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  topMoviesResults = new Array<Movie>();

  constructor(private moviesService: MoviesService ) {}

  ngOnInit() {
    this.moviesService.getAll().subscribe(
      data => { this.topMoviesResults = data.results; },
      error => console.log(error)
    );
  }
}
