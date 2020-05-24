import { environment } from '../../environments/environment.prod';
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
    return of({token: 'loggedINToken', name: 'JOhn Snow'});
  }
  setToken(key, value) {
    localStorage.setItem(key, value);
  }
  isLogggedIn() {
    return true;
  }
}
