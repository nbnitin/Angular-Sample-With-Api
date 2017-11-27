import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer implements OnInit {


  @Input() check: any;
  @Output() checkOutFooter = new EventEmitter<boolean>();

  public isLoggedIn = "false";

  ngOnInit() {
    if (localStorage.getItem("isLoggedIn") == "true") {
      this.check = true;
    } else {
      this.check = false;
    }
    this.checkOutFooter.emit(this.check);
  }

}
