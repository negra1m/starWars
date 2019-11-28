import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { map, tap } from "rxjs/operators";

@Injectable()
export class SwApiService {
  // Define all routes and its children.
  private url = {
    base: "https://swapi.co/api/",
    people: "http://swapi.co/api/people/",
    planets: "http://swapi.co/api/planets/",
    films: "http://swapi.co/api/films/",
    species: "http://swapi.co/api/species/",
    vehicles: "http://swapi.co/api/vehicles/",
    starships: "http://swapi.co/api/starships/"
  };

  constructor(private http: HttpClient) {}

  private getCall(url: string) {
    return this.http.get(url);
  }

  /**
   * Get methods by or not search input
   */
  get(): Observable<any> {
    return this.getCall(this.url.base);
  }

  getPeople(page: number = null, input: string = ""): Observable<any> {
    let url: string = this.url.people;
    if (page) {
      url += "?page=" + page;
    }
    if (input) {
      url += "?search=" + input;
    }
    return this.getCall(url);
  }

  getPlanets(page: number = null, input: string = ""): Observable<any> {
    let url: string = this.url.planets;
    if (page) {
      url += "?page=" + page;
    }
    if (input) {
      url += "?search=" + input;
    }
    return this.getCall(url);
  }

  getFilms(page: number = null, input: string = ""): Observable<any> {
    let url: string = this.url.films;
    if (page) {
      url += "?page=" + page;
    }
    if (input) {
      url += "?search=" + input;
    }
    return this.getCall(url);
  }

  getSpecies(page: number = null, input: string = ""): Observable<any> {
    let url: string = this.url.base + "species/";
    if (page) {
      url += "?page=" + page;
    }
    if (input) {
      url += "?search=" + input;
    }
    return this.getCall(url);
  }

  getVehicles(page: number = null, input: string = ""): Observable<any> {
    let url: string = this.url.vehicles;
    if (page) {
      url += "?page=" + page;
    }
    if (input) {
      url += "?search=" + input;
    }
    return this.getCall(url);
  }

  getStarships(page: number = null, input: string = ""): Observable<any> {
    let url: string = this.url.starships;
    if (page) {
      url += "?page=" + page;
    }
    if (input) {
      url += "?search=" + input;
    }
    return this.getCall(url);
  }

  /**
   * Search By ID
   */

  getPerson(id: number): Observable<any> {
    const url: string = this.url.people + id + "/";
    return this.getCall(url);
  }

  getPlanet(id: number): Observable<any> {
    const url: string = this.url.planets + id + "/";
    return this.getCall(url);
  }

  getFilm(id: number): Observable<any> {
    const url: string = this.url.films + id + "/";
    return this.getCall(url);
  }

  getSpecie(id: number): Observable<any> {
    const url: string = this.url.species + id + "/";
    return this.getCall(url);
  }

  getVehicle(id: number): Observable<any> {
    const url: string = this.url.vehicles + id + "/";
    return this.getCall(url);
  }

  getStarship(id: number): Observable<any> {
    const url: string = this.url.starships + id + "/";
    return this.getCall(url);
  }

  getPersonSchema(): Observable<any> {
    const url: string = this.url.people + "schema";
    return this.getCall(url);
  }

  getPlanetSchema(): Observable<any> {
    const url: string = this.url.planets + "schema";
    return this.getCall(url);
  }

  getFilmSchema(): Observable<any> {
    const url: string = this.url.films + "schema";
    return this.getCall(url);
  }

  getSpecieSchema(): Observable<any> {
    const url: string = this.url.species + "schema";
    return this.getCall(url);
  }

  getVehicleSchema(): Observable<any> {
    const url: string = this.url.vehicles + "schema";
    return this.getCall(url);
  }

  getStarshipSchema(): Observable<any> {
    const url: string = this.url.starships + "schema";
    return this.getCall(url);
  }
}
