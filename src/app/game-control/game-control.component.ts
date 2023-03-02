import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer: NodeJS.Timer;
  counter: number = 0;
  @Output() counterEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  startGame(): void {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counterEmitter.emit(++this.counter)
      }, 1000);
    }
  }

  stopGame(): void {
    clearInterval(this.timer)
    this.timer = undefined;
  }

}
