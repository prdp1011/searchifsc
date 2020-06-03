import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthCompGuard implements CanActivate {
  constructor(private logServ: LoginService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): | boolean  {
      const isLoggedIn = this.logServ.isLogggedIn();
      switch (state.url) {
        case '/list':
          return isLoggedIn;
        default:
          return isLoggedIn ? this.logServ.moveToList() : true;
      }
  }

}
