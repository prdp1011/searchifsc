import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private router: Router) { }

  login({username, password}): any {
    return this.http.post(`${environment.url}/app/login`, {username, password});
  }
  setToken(key, value) {
    localStorage.setItem(key, value);
  }
  isLogggedIn() {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  moveToList() {
    this.router.navigate(['/list']);
    return false;
  }

}
