import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../../service/httpService';

@Component({
  selector: 'cate-child-create',
  templateUrl: './createcategory.html',
  styleUrls: ['./createcategory.scss'],

})
export class CreateCategory implements OnInit, AfterViewInit {

  constructor(private httpService: HttpService, private element: ElementRef) { }
  private details = {};
  done = false;
  image;
  file: File;
  ngAfterViewInit() {
    this.image = this.element.nativeElement.querySelector('.image');
  }

  ngOnInit() {
    //this.image = this.element.nativeElement.querySelector('.image');
  }


  changeListner(event) {
    var reader = new FileReader();
    var img = this.element.nativeElement.querySelector('.image');

    reader.onload = function(e) {
      var src = e.target.result;
      img.src = src;
      this.image = img;
    };
    this.file = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
  }

  create() {

    var formData = new FormData();
    formData.append("cateImage", this.file);
    //formData.append("cateName", this.details.cateName);
    this.httpService.uploadCateImage(formData).subscribe((data) => {
      console.log(data);
      // if (data.status == 1) {
      //   this.done = true;
      //   this.details = {}
      // }

    });
  }
}
