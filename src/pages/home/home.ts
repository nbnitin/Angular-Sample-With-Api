import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../../service/httpService';

@Component({
  selector: 'app-root',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],

})
export class Home implements OnInit {

  constructor() { }
  private userInfo = {};

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo = this.userInfo[0]
    console.log(this.userInfo.userName);
  }

}
