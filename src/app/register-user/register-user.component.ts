import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs'; // Import lastValueFrom
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
  registerForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    // Initializing form with validation
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dob: ['', Validators.required],
      occupation: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      memberSince: ['', Validators.required],
      originCity: ['', Validators.required],
      originDistrict: ['', Validators.required],
    });
  }

  // Register user method
  async registerUser() {
    if (this.registerForm.valid) {
      const apiUrl = 'https://skpmspring1.azurewebsites.net/member/signup'; // Replace with your actual Azure API endpoint

      try {
        const response = await lastValueFrom(
          this.http.post(apiUrl, this.registerForm.value)
        );
        console.log('User registered successfully:', response);
        // You can redirect to the login page or show a success message here
      } catch (error) {
        console.error('Error registering user:', error);
        // Handle errors here (e.g., show an error message)
      }
    } else {
      console.error('Form is invalid');
      // Handle form validation errors
    }
  }
}
