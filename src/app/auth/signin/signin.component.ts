import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  loggedIn;

  constructor( private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.authService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
   }
  

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login () {
    const val = this.loginForm.value;
    this.authService.login(val.username, val.password);
    this.router.navigate(['/']);
  }


  getBalance() {
    this.authService.getBalance()
      .subscribe((res)=>{
        console.log(res);
      })
  }
}
