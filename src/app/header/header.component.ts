import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginlogoutService } from '../services/loginlogout.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logInLogout: string = "Log In";
  
  constructor(private loginlogoutService: LoginlogoutService) {
    this.loginlogoutService.isUserLoggedIn.subscribe(res => {
      this.logInLogout = res? "Log Out" : "Log In";
      
    });
  }
}
