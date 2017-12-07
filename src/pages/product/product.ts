import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../../service/httpService';

@Component({
  selector: 'app-root',
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],

})
export class Product {

  constructor() { }
  private currentPage = 0;

  switchPage(pageNumber) {
    this.currentPage = pageNumber;
  }


}
