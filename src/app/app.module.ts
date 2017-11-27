import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes}  from '@angular/router';

import {AppComponent} from './app.component';
import { Login } from '../pages/login/login';
import { SignUp } from '../pages/signup/signup';
import { Home } from '../pages/home/home';
import { Header } from '../pages/header/header';
import { Footer } from '../pages/footer/footer';

import { HttpService } from '../service/httpService';

import {Auth} from '../service/auth';

const appRoutes: Routes = [
  { path: '', component: Login },
  { path: 'singup', component: SignUp },
  { path: 'home', component: Home, canActivate: [Auth], canDeactivate: [Auth] }
];

const api_endpoint = 'http://localhost:3000/api/';


@NgModule({
  declarations: [
    AppComponent,
    Login,
    SignUp,
    Home,
    Header,
    Footer
  ],
  exports: [RouterModule],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [HttpService, Auth, { provide: 'API_ENDPOINT', useValue: api_endpoint }],
  bootstrap: [AppComponent, Header, Footer]
})
export class AppModule { }
