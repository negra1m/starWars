import { Component, OnInit, ViewChild } from "@angular/core";
import { IntroHeaderComponent } from "./components/header/intro-header.component";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"]
})
export class IntroComponent implements OnInit {
  @ViewChild(IntroHeaderComponent, { static: false })
  header: IntroHeaderComponent;
  showPanel: boolean;

  constructor() {
    this.showPanel = false;
  }

  ngOnInit() {}

  showOptions() {
    this.showPanel = true;
    this.header.audio.volume = 0;
  }
}
