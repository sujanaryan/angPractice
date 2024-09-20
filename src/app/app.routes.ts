import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import { SermonComponent } from './sermon/sermon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { TestComponentComponent } from './test-component/test-component.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'register', title: 'Register', component: RegisterUserComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'account', title: 'Account', component: AccountComponent },
  { path: 'sermon', title: 'Sermon', component: SermonComponent },
  { path: 'test', title: 'Testing', component: TestComponentComponent },
  { path: '**', title: 'Home', component: PageNotFoundComponent },
];
