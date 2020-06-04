import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BranchlistService {
  url = `${environment.url}/bank`;
  headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) { }

  getheader() {
    this.headers = new HttpHeaders({
      Authorization: localStorage.getItem('token')
    });
    return {headers: this.headers};
  }

  getBranchList() {
    return this.http.get(`${this.url}/bankList`, this.getheader());
  }
  addBranch(data) {
    const h = this.getheader();
    return this.http.post(`${this.url}/create`,
     data,  { ...h, responseType: 'text' as 'json'});
  }

  // Cities
  getBanks() {
    return this.http.get(`${this.url}/bank`, this.getheader());
  }

  getStates(): Observable<any> {
    return this.http.get(`${this.url}/state`, this.getheader());
  }
  getDistrict(state): Observable<any> {
    return this.http.post(`${this.url}/districts`, {state}, this.getheader());
  }
  logout() {
    return this.http.post(`${environment.url}/app/logout`, {});
  }
}
