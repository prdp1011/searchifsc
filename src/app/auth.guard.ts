import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private logServ: LoginService, private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    const isLoggedIn = this.logServ.isLogggedIn();
    switch (route.path) {
      case 'list':
        return isLoggedIn ? isLoggedIn : this.logServ.moveToMain();
      default:
        return isLoggedIn ? this.logServ.moveToList() : true;
    }
  }
}
