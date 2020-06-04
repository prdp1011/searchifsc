import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  private bankList = [];
  constructor(private http: HttpClient) {
  }
  getBankGridList() {
    if (!this.bankList.length) {
      return this.http.get(`${environment.url}/bankList`)
      .pipe(tap((res: any) => this.bankList = res));
    }
    return of(this.bankList);
  }
  // done
  searchDetails(list) {
    return this.getBankGridList()
    .pipe(map(lis => _.filter(lis, list)));
  }
  getIfsc(id) {
    return this.http.get(`${environment.url}/bankList/${id}`);
  }

  getDropDownValues(add, list) {
    return this.getBankGridList()
    .pipe(map(res => _.uniq(_.map(this.filterList(res, list), b => b[add]))));
  }
  filterList(lis, {state, bank, district}) {
    const data = Object.assign({},
      state && {state},
      bank && {bank},
      district && {district}
    );
    if (bank) {
      return  _.filter(lis, data);
    }
    return lis;
  }



}
