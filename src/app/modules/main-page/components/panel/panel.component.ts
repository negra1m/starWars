import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Options } from "src/app/core/models/options.model";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"]
})
export class PanelComponent implements OnInit {
  choice$: any;
  selection: any;
  options: Options[];
  title = "Choose a category";

  constructor(private route: ActivatedRoute, private service: MainService) {
    this.choice$ = this.route.snapshot.paramMap.get("side");
    this.options = [
      { category: "Movies", icon: "film" },
      { category: "Characters", icon: "smile" },
      { category: "Planets", icon: "globe" },
      { category: "Species", icon: "book-open" },
      { category: "Vehicles", icon: "truck" },
      { category: "Starships", icon: "send" }
    ];
  }

  ngOnInit() {}

  get(category: string) {
    switch (category) {
      case "Movies":
        console.log((this.selection = this.service.getMovies()));
        break;
      case "Characters":
        this.selection = this.service.getPeople();
        break;
      case "Planets":
        this.selection = this.service.getPlanets();
        break;
      case "Species":
        this.selection = this.service.getSpecies();
        break;
      case "Vehicles":
        this.selection = this.service.getVehicles();
        break;
      case "Starships":
        this.selection = this.service.getStarships();
        break;
    }
    console.log(this.selection);
  }
}
