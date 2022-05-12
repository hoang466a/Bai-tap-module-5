import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";
import {SignIn} from "../sign-in";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  signInForm= new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl("",[Validators.required,Validators.minLength(6),this.ValidationCustompoint]),
    country: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl()
  })
  signin: SignIn;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signInForm.value);
  }

ValidationCustompoint(point: AbstractControl){
let pass=point.get('password').value;
let confirmPass=point.get('confirmPassword').value;
return pass === confirmPass ?null:{'notmatch0':true};
}
}
