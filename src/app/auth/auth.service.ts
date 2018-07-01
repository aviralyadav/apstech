import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
// import { HttpClient } from "selenium-webdriver/http";
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class AuthService {
    constructor(private http: Http, private toastr: ToastrService) {
        const jwtToken = this.getToken();
        this.loggedIn = new BehaviorSubject<boolean>(jwtToken ? true : false);
    }

    api = 'http://localhost:3000/api';
    loggedIn: BehaviorSubject<boolean>;
    token;

    isAuthenticated() {
        return this.getToken() != null;
    }
    
    headers = new Headers({
        'Content-Type': 'application/json',
    });

    getToken(): string {
        return window.localStorage['jwtToken'];
    }

    saveToken(token: string) {
        window.localStorage['jwtToken'] = token;
    }

    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }

    buildHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if (this.getToken()) {
            headersConfig['Authorization'] = `Token ${this.getToken()}`;
        }
        return new HttpHeaders(headersConfig);
    }

    login(email: string, password: string) {
        console.log(email, password);
        this.http.post(this.api + '/login', {
            email: email,
            password: password
        }).subscribe((resp: any) => {
            // console.log(resp.json());
            this.loggedIn.next(true);
            this.token = resp.json().token;
            this.saveToken(this.token);
            // console.log((this.token));
            this.toastr.success(resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!');
        }, (errorResp) => {
            this.loggedIn.next(undefined);
            errorResp.error ? this.toastr.error(errorResp.error.errorMessage) : this.toastr.error('An unknown error has occured.');
        });
    }

    logout() {
        this.destroyToken();
        this.loggedIn.next(false);
    }

    getBalance() {
        return this.http.get(this.api + '/balance');
    }


}