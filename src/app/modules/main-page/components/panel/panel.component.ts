import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"]
})
export class PanelComponent implements OnInit {
  choice$: any;
  constructor(private route: ActivatedRoute) {
    this.choice$ = this.route.snapshot.paramMap.get("side");
  }

  ngOnInit() {}
}
