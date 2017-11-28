import { Injectable, Inject } from '@angular/core';
import {Router, CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable() //DOn't forget to add this
export class Auth implements CanActivate, CanDeactivate<CanComponentDeactivate> {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('isLoggedIn')) {
      console.log("i m in url")
      return true;
    }
    this.router.navigate([''], { queryParams: { returnUrl: state.url } });
  }

  canDeactivate(component: CanComponentDeactivate) {
    console.log(component)
    let x = window.confirm("Do you really want to go back?");
    if (x) {
      return true;
    }
  }



}
