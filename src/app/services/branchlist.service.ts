import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
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
  // Cities
  getBankList() {
    return this.http.get(`${environment.url}/bank`);
  }
  getCitiesArray() {
    return this.http.get(`${environment.url}/cities`);
  }
  getStates() {
    return this.getCitiesArray()
    .pipe(map(res => {
      return _.orderBy(_.uniq(_.map(res, 'State')));
    }));
    // cities
  }
  getDistrict(State) {
    return this.getCitiesArray()
    .pipe(map(res => {
      return _.orderBy(_.uniq(
        (_.map(
          _.reject(res, (list) => list.State !== State),
          'District'))));
    }));
  }
}
