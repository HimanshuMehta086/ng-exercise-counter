import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Input() counter: number;

  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  incrementClickHandler() {
    this.increment.emit();
  }

  decrementClickHandler() {
    this.decrement.emit();
  }
}
