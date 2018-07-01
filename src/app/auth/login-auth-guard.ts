import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()

export class LoginAuthGuard implements CanActivate {
    constructor (private authService: AuthService, private router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.authService.isAuthenticated();
  }
}