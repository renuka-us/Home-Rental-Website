import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage!: String;
  

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private router:Router) { 
    this.loginForm = this.formBuilder.group({
    email: ['', [(<any>Validators)['required'],(<any>Validators)['email']]],
    password: ['', (<any>Validators)['required']]
  });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      console.log(this.loginForm.valid)
      for (const controlName in this.loginForm.controls) {
        if (this.loginForm.controls.hasOwnProperty(controlName)) {
          const control = this.loginForm.controls[controlName];
          if (control.invalid) {
            console.log('Invalid field:', controlName);
          }
        }
      }
    }
 
const loginData = this.loginForm.value;
console.log(loginData);
this.httpClient.post('http://localhost:3000/login', loginData).subscribe(
  (response) => {
    console.log('Login successful', response);
    alert("Login Successful");
    this.router.navigate(['/home-page']);
  },
  (error) => {
    alert("Invalid Credentials");
    console.error('Login failed', error);
  }
);

    
  // alert("Login Successful");
  //  this.router.navigate(['/home-page']);   
    }
  }

