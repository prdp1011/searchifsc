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
  private url = `${environment.url}/main`;
  constructor(private http: HttpClient) {
  }


  searchDetails(payload) {
    return this.http.post( `${this.url}/find`, payload);
  }

  getDropDownValues(field, {state, bank, district}) {
    const data = Object.assign({},
      state && {state},
      bank && {bank},
      district && {district}
    );
    const payload = {
      data, field
    };
    return this.http.post( `${this.url}/lists`, payload);
  }

}
