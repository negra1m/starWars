import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"]
})
export class PanelComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToMain(decision) {
    this.router.navigate([`main`], {
      queryParams: { side: decision }
    });
  }
}
