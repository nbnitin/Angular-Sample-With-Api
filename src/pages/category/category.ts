import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../../service/httpService';

@Component({
  selector: 'app-root',
  templateUrl: './category.html',
  styleUrls: ['./category.scss'],

})
export class Category {

  constructor() { }
  private currentPage = 0;

  switchPage(pageNumber) {
    this.currentPage = pageNumber;
  }


}
