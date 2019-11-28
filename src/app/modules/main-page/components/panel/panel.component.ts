import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { SwApiService } from "src/app/core/services/sw-api.service";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"]
})
export class PanelComponent implements OnInit {
  choice$: any;
  constructor(
    private route: ActivatedRoute,
    private swapiService: SwApiService
  ) {
    this.choice$ = this.route.snapshot.paramMap.get("side");
    console.log(this.choice$);
  }

  ngOnInit() {
    this.swapiService.get().subscribe(res => {
      console.log(res);
    });
  }
}
