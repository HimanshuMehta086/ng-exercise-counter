import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;

  incrementHandler() {
    if (this.counter < 20) {
      this.counter++;
    } else {
      console.log('Increment limit breach');
    }
  }

  decrementHandler() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      console.log('Decrement limit breach');
    }
  }
}
