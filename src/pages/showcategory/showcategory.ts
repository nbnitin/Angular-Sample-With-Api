import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../../service/httpService';

@Component({
  selector: 'cate-child-show',
  templateUrl: './showcategory.html',
  styleUrls: ['./showcategory.scss'],

})
export class ShowCategory implements OnInit {

  constructor(private httpService: HttpService) { }
  private category = [];

  ngOnInit() {
    this.show();
  }

  show() {
    this.httpService.showCategory(this.details).subscribe((data) => {
      if (data.status == 1) {
        this.category = JSON.parse(data.contents);
      }
    });
  }
}
