import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Options } from "src/app/core/models/options.model";

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

  constructor(private route: ActivatedRoute) {
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

  search(category: string) {
    console.log("called >>", category);
  }
}
