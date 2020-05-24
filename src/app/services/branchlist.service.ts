import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchlistService {

  constructor(
    private http: HttpClient
  ) { }

  getBranchList() {
    return this.http.get(`${environment.url}/bankList`);
  }
  addBranch(data) {
    data['id'] = data.ifsc;
    return this.http.post(`${environment.url}/bankList`, data);
  }

  getBanks() {
    return this.http.get(`${environment.url}/bank`);
  }
}
