import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  audio = new Audio();
  iconName = '2';
  ngOnInit() {
    this.playAudio();
  }

  playAudio() {
    this.audio.src = encodeURIComponent('assets/starwars.mp3');
    this.audio.load();
    this.audio.play();
    this.audio.volume = 0.1;
  }

  muteUnmute() {
    this.audio.volume ? (this.audio.volume = 0, this.iconName = 'x') : (this.audio.volume = 0.1, this.iconName = '2');
  }
}
