import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() skipped;
  title = "star-wars";
  audio = new Audio();
  iconName = "2";
  show = false;

  constructor() {
    this.skipped = new EventEmitter<string>();
  }

  ngOnInit() {
    this.playAudio();
  }

  playAudio() {
    this.audio.src = encodeURIComponent("assets/starwars.mp3");
    this.audio.load();
    this.audio.play();
    this.audio.volume = 0.1;
  }

  muteUnmute() {
    this.audio.volume
      ? ((this.audio.volume = 0), (this.iconName = "x"))
      : ((this.audio.volume = 0.1), (this.iconName = "2"));
  }

  skip() {
    this.show = true;
    this.skipped.emit("clicked");
  }
}
