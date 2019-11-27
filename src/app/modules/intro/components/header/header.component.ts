import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  title = 'star-wars';
  audio = new Audio();
  iconName = '2';

  constructor() {
    // If needed services integration later
  }

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

  skip() {
    // TODO
  }

}
