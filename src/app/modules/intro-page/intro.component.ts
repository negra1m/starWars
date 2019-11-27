import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"]
})
export class IntroComponent implements OnInit {
  showPanel: boolean;

  constructor() {
    this.showPanel = false;
  }

  ngOnInit() {}

  showOptions() {
    this.showPanel = true;
    console.log("chegou");
  }
}
