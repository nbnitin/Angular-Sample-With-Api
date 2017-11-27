import { Component, DoCheck, Output, EventEmitter} from '@angular/core';
import {Header} from '../pages/header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Header]
})
export class AppComponent {
  title = 'app';
  checkLoggedInHeader = 1;
  @Output() checkOutHeader = new EventEmitter<boolean>();

  checkLoggedInFooter = 1;
  @Output() checkOutFooter = new EventEmitter<boolean>();

  constructor(private header: Header) { }


  checkOut1(e) {
    this.checkLoggedInHeader = e;
  }

  checkOut2(e) {
    this.checkLoggedInFooter = e;
  }

}
