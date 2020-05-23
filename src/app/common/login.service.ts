import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(payload) {
    // this.http.post(`{environment.url}`, )
    return of({token: 'loggedIN]'});
  }
  setToken(token) {
    localStorage.setItem('token', token);
  }
  isLogggedIn() {
    return true;
  }
}
