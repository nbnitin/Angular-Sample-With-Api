import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable() //DOn't forget to add this
export class HttpService {

  constructor(private http: Http, @Inject('API_ENDPOINT') private api_endpoint: string) { }

  login(body): Observable<any> {
    console.log(body);
    return this.http.post(this.api_endpoint + 'login', body).map(response => response.json())
      .catch((err: Response | any) => {
        return Observable.throw(err.statusText);
      });
  }
}
