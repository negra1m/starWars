import { Injectable } from "@angular/core";
import { SwApiService } from "src/app/core/services/sw-api.service";

@Injectable({
  providedIn: "root"
})
export class MainService {
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

  getPlanets() {
    const planets = [];
    this.swapiService.getPlanets().subscribe(res => {
      res.results.map(result => {
        planets.push({});
      });
    });
    return planets;
  }

  getSpecies() {
    const species = [];
    this.swapiService.getPlanets().subscribe(res => {
      res.results.map(result => {
        species.push({});
      });
    });
    return species;
  }

  getVehicles() {
    const vehicles = [];
    this.swapiService.getPlanets().subscribe(res => {
      res.results.map(result => {
        vehicles.push({});
      });
    });
    return vehicles;
  }

  getStarships() {
    const ships = [];
    this.swapiService.getPlanets().subscribe(res => {
      res.results.map(result => {
        ships.push({});
      });
    });
    return ships;
  }
}
