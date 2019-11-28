import { Injectable } from "@angular/core";
import { SwApiService } from "src/app/core/services/sw-api.service";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  constructor(private swapiService: SwApiService) {}

  getMovies() {
    const movies = [];
    this.swapiService.getFilms().subscribe(res => {
      res.results.map(result => {
        movies.push({
          title: result.title,
          espisode: result.episode_id,
          description: result.opening_crawl,
          director: result.director,
          release: result.release_date
        });
      });
    });
    return movies;
  }

  getPeople() {
    const people = [];
    this.swapiService.getPeople().subscribe(res => {
      res.results.map(result => {
        people.push({});
      });
    });
    return people;
  }
}
