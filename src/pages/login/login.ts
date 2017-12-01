import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../../service/httpService';

@Component({
  selector: 'app-root',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {
  title = 'app';
  details = {};
  failedLogin = false;
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    if (localStorage.getItem("isLoggedIn")) {
      this.router.navigateByUrl("/home");
    }
  }

  login() {
    console.log(this.details);
    this.httpService.login(this.details).subscribe((data) => { //use methods in our service
      let response = data;
      console.log(response.contents[0]);

      if (response.contents.length > 0) {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('userInfo', response.contents);
        this.router.navigateByUrl("/home");
      } else { this.failedLogin = true }

    }, (err) => {
      console.log(err);
    });
  }



  redirect() {

    this.router.navigate(['/singup']);
  }

}
