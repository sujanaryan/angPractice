import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import {UrlConstant} from '../constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginlogoutService {
  public isUserLoggedIn = new Subject<boolean>();
  
  constructor(private http: HttpClient,
    private router: Router
  ) { }

  public logIn(loginObj:any) {
    this.http.post(UrlConstant.loginUrl, loginObj)
    .subscribe((res:any) => {
      console.log("res:" + res.emailId);
      res.token = 'sanjayToken';
      if (res.token) {
        if (localStorage.getItem("token") === null) {
          localStorage.setItem('token', res.token);
        }        
      }
      this.isUserLoggedIn.next(true);
      this.router.navigateByUrl('');           
    });
  }

  public logout() {
    this.isUserLoggedIn.next(false);
    localStorage.clear();
  }
}
