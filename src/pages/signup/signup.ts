import { Component } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})

export class SignUp {
  userInfo = { userName: "", password: "", cPassword: "" };
  notMatch = false;
  apiURL = "http://localhost:3000/api/addUser";

  constructor(private http: Http) { }

  createUser() {
    //let header = new Headers("Access-Control-Allow-Origin: *");
    let header = new Headers();
    header.append('Content-Type', "application/json");
    // header.append('Access-Control-Allow-Credentials', 'true');
    let password = this.userInfo["password"];
    let cPassword = this.userInfo["cPassword"];
    if (password != cPassword) {
      this.notMatch = true;
      return;
    }
    var body = this.userInfo
    console.log(this.userInfo);
    this.http.post(this.apiURL, body, { headers: header }).map((res: Response) => {
      console.log(res.json().message);
    }).subscribe(result => console.log(result));
    console.log("hiis");
  }
}
