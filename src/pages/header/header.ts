import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

@Injectable()
export class Header implements OnInit {
  @Input() check: any;
  @Output() checkOutHeader = new EventEmitter<boolean>();

  public isLoggedIn = "false";

  ngOnInit() {
    if (localStorage.getItem("isLoggedIn") == "true") {
      this.check = true;
    } else {
      this.check = false;
    }
    this.checkOutHeader.emit(this.check);
  }
}
