import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"]
})
export class PanelComponent implements OnInit {
  choice$: any;
  constructor(private route: ActivatedRoute) {
    this.choice$ = this.route.snapshot.paramMap.get("side");
    console.log(this.choice$);
  }

  ngOnInit() {}
}
