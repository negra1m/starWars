import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-intro-header",
  templateUrl: "./intro-header.component.html",
  styleUrls: ["./intro-header.component.scss"]
})
export class IntroHeaderComponent implements OnInit {
  @Output() skipped;
  title = "star-wars";
  audio = new Audio();
  iconName = "2";
  showSkip = false;
  disabled = true;

  constructor() {
    this.playAudio();
    this.skipped = new EventEmitter<string>();
  }

  ngOnInit() {
    setInterval(() => {
      this.disabled = false;
    }, 4000);
  }

  stopAudio() {
    this.audio = null;
  }

  playAudio() {
    this.audio.src = encodeURIComponent("assets/starwars.mp3");
    this.audio.autoplay = true;
    this.audio.load();
    this.audio.volume = 0.1;
    this.audio.play();
  }

  muteUnmute() {
    this.audio.volume
      ? ((this.audio.volume = 0), (this.iconName = "x"))
      : ((this.audio.volume = 0.1), (this.iconName = "2"));
  }

  skip() {
    this.showSkip = true;
    this.skipped.emit("clicked");
  }
}
