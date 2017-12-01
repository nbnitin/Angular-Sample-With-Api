import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../../service/httpService';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'cate-child-show',
  templateUrl: './showcategory.html',
  styleUrls: ['./showcategory.scss'],

})
export class ShowCategory implements OnInit {

  constructor(private httpService: HttpService, public snackBar: MatSnackBar, private route: Router) { }
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

    var body = { "_id": id };
    this.httpService.deleteCategory(body).subscribe((data) => {
      console.log(data);
      if (data.status == 1) {
        this.openSnackBar();
        this.category = this.category.filter(item => item._id != id);
      }
    });
  }

  //navigate for edit/view
  view(id) {
    this.route.navigate(['/updateCate', id]);
  }

  //open snack bar
  openSnackBar() {
    this.snackBar.open('Deleted Successfully', 'Close', { duration: 1000 });
  }



}
