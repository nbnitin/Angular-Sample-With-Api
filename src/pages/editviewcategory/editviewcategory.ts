import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpService} from '../../service/httpService';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: '',
  templateUrl: './editviewcategory.html',
  styleUrls: ['./editviewcategory.scss'],

})
export class EditViewCategory implements OnInit {

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private element: ElementRef, private sanitizer: DomSanitizer, @Inject('IMAGE_ENDPOINT') private image_load: string) { }

  private imagePath = "http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/img_01.jpg";
  private file: File;
  details: any = {};

  ngOnInit() {
    this.fetchDetails()
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

  fetchDetails() {
    this.httpService.searchCategory(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      if (data.status == 1) {
        var tempData = JSON.parse(data.contents);
        this.details = tempData[0];
        console.log(this.details);
        if (this.details.cateImage == null || this.details.cateImage == "") {
          var temp = { "_id": this.details["_id"], "cateName": this.details["cateName"], "cateImage": this.imagePath };
          this.details = temp;
        } else {
          this.details.cateImage = this.image_load + 'category/' + this.details.cateImage
        }
      }
    })
  }


}
