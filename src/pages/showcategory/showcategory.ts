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
  private imagePath = "http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/img_01.jpg";

  ngOnInit() {
    this.show();
  }

  show() {
    this.httpService.showCategory("").subscribe((data) => {
      if (data.status == 1) {
        this.category = JSON.parse(data.contents);
      }
    });
  }

  fetchImage(imageName) {
    if (imageName != undefined) {
      return "http://localhost:3000/images/category/" + imageName;
    }
    return this.imagePath;
  }

  deleteCate(id) {
    console.log(id);
  }
}
