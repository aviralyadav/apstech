import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  signupForm: FormGroup;
  name = '';

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/^[a-z A-Z]+$/)
      ]
      ],
      mobile: ['', [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ]
      ],
      email: ['', [
        Validators.required,
        Validators.email
      ]
      ],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmitHandler(form) {
    console.log(form);
  }

  onReset() {
    this.signupForm.reset();
  }

}
