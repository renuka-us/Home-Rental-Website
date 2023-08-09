import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
registrationForm: FormGroup;
submitted = false;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private router:Router) { 
    this.registrationForm = this.formBuilder.group({
    fname: ['', (<any>Validators)['required']],
    lname: ['', (<any>Validators)['required']],
    email: ['', [(<any>Validators)['required'],(<any>Validators)['email']]],
    phone: ['', (<any>Validators)['required']],
    address: ['', (<any>Validators)['required']],
    pin: ['', (<any>Validators)['required']],
    password: ['', (<any>Validators)['required']]
  });
  }

 

  onSubmit() {
    if (this.registrationForm.invalid) {
      console.log(this.registrationForm.valid)
      for (const controlName in this.registrationForm.controls) {
      if (this.registrationForm.controls.hasOwnProperty(controlName)) {
        const control = this.registrationForm.controls[controlName];
        if (control.invalid) {
          console.log('Invalid field:', controlName);
        }
      }
    }
    return;
  }

  const registrationData = this.registrationForm.value;
    
    this.httpClient.post('http://localhost:3000/registration', registrationData).subscribe(  (response) => {
    console.log('Registration successful', response);
        alert("Registration Successfull")
        this.router.navigate(['/registration-successfull']);
  },
  (error) => {
    alert("Server Error try again later!");
    console.error('Registration failed', error);
        return of(error) as Observable<any>; 
  }
);
}

}
