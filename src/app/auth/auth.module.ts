import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { HttpModule } from "@angular/http";
// import { AuthService } from "./auth.service";
import { HttpClient } from "selenium-webdriver/http";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        // HttpModule,
        // HttpClient
    ],
    exports: [],
    providers: []
})

export class AuthModule {}