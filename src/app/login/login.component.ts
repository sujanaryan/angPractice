import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {LoginUserDto} from '../models/loginUserdto';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoginlogoutService } from '../services/loginlogout.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public pageTitle = 'Login';
  email: any;
  password: any;
  
  constructor(private loginlogoutService: LoginlogoutService
  ) { }

  login(){
    console.log("you entered email: " + this.email);
    console.log("you entered email: " + this.password);

    const loginObj = {
      "emailId": "sujan@react.com",
      "password": "Kalika@123"
    };
    this.loginlogoutService.logIn(loginObj);
  }

  logout() {
    //this._isLoggedIn.next(false);
  }
}
