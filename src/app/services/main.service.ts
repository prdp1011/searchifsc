import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getIfsc() {
    return this.http.get(`${environment.url}/ifsc`)
    .pipe(map((lis) => {
      const i = Math.floor(Math.random() * 4);
      return lis[i];
    }));
  }
  searchDetails() {
    return this.getIfsc().pipe(mergeMap((id) => this.getDetails(id)));
  }
  getDetails(id) {
    return this.http.get(`${environment.url}/bankList/${id}`);
  }

  getBankDetails(add) {
    return this.http.get(`${environment.url}/${add}`);
  }
}
