import { Component, OnInit, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../../service/httpService';

@Component({
  selector: 'product-child-create',
  templateUrl: './createproduct.html',
  styleUrls: ['./createproduct.scss'],

})
export class CreateProduct implements OnInit {

  constructor(private httpService: HttpService, private element: ElementRef) { }
  private details = { "_id": "", "productName": "", "productImage": "" };
  private done = false;
  private file: File;
  private category = [];

  ngOnInit() {
    this.showCategory();
  }

  showCategory() {
    this.httpService.showCategory("").subscribe((data) => {
      if (data.status == 1) {
        this.category = JSON.parse(data.contents);
      }
    });
  }


  changeListner(event) {
    var reader = new FileReader();
    var img = this.element.nativeElement.querySelector('.image');

    reader.onload = function(e) {
      var src = reader.result;
      img.src = src;
    };
    this.file = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
  }

  create() {

    var formData = new FormData();
    formData.append("productImage", this.file);
    //formData.append("cateName", this.details.cateName);
    this.httpService.uploadProductImage(formData).subscribe((data) => {
      console.log(data);
      if (data.status == 1) {
        var newEntry = { "_id": this.details._id, "productName": this.details.productName, "productImage": data.contents };
        this.details = newEntry;
        this.httpService.createProduct(this.details).subscribe((data) => {
          console.log(data);
        });
      }

    });
  }
}
