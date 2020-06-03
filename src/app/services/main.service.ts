import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {
  }
  getBankGridList() {
    return this.http.get(`${environment.url}/bankList`);
  }
  // done
  searchDetails(list) {
    return this.getBankGridList()
    .pipe(map(lis => _.filter(lis, list)));
  }
  getIfsc(id) {
    return this.http.get(`${environment.url}/bankList/${id}`);
  }

  getDropDownValues(add) {
    return this.getBankGridList()
    .pipe(map(res => _.uniq(_.map(res, b => b[add]))));
  }



}
