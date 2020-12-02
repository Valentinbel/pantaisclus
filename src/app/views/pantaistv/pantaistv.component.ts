import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantaistv',
  templateUrl: './pantaistv.component.html',
  styleUrls: ['./pantaistv.component.css']
})

export class PantaistvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // audio video intro
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome) {
      document.getElementById('iframeAudio').remove();
    }
    // else {
    // document.getElementById('playAudio').remove();
    // }

    const videointro = document.getElementById('videointro') as HTMLMediaElement;
    const divintro = document.getElementById('intro');
    const divseguida = document.getElementById('seguida');

    videointro.onended = function hideintro(): void {
      divintro.classList.add('hide');
      divseguida.classList.add('display');
      divseguida.classList.remove('hide');
    };

  }
  // Escapa button
  hideAndMute(): void {
    const videointro = document.getElementById('videointro') as HTMLMediaElement;
    const divintro = document.getElementById('intro');
    const divseguida = document.getElementById('seguida');
    divintro.classList.add('hide');
    divseguida.classList.add('display');
    divseguida.classList.remove('hide');
    videointro.parentNode.removeChild(videointro);
  }
    // unmute video intro
    toggleMute(): void {
      const videointro = document.getElementById('videointro') as HTMLMediaElement;
      videointro.muted = !videointro.muted;
    }
}
