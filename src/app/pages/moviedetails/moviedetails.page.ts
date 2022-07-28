import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {

  movie = null;
  imageBaseUrl = environment.images;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
    ) { }
  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
    });
  }
  
  openHomepage(url) {
    window.open(url, '_blank');
  }

}
