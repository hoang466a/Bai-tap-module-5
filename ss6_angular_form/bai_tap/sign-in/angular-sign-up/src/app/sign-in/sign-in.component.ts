import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {SignIn} from '../sign-in';


// @ts-ignore
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), this.ValidationCustompoint1]),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
  });
  signin: SignIn;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signInForm.value);
  }

  ValidationCustompoint1(point: AbstractControl) {
    const value = point.value;
    if (value < 18) {
      return {'notUnder18': true};
    } else {
      return null;
    }
  }

  checkConfirm() {
    if (this.signInForm.get('password').value !== this.signInForm.get('confirmPassword').value) {
      this.signInForm.get('confirmPassword').setErrors({'notMatch': true});
    }
  }
}
