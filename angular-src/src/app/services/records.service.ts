import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Record } from '../components/dashboard/record';

@Injectable()
export class RecordsService {
  authToken: any;
  baseUrl: string = 'http://peterhan5.sh.intel.com:3000/';

  constructor(private http: Http) {}


  getRecords() {
    /*
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers}).map(res => res.json());
    */
    return this.http.get(this.baseUrl + 'records/records').map(res => res.json());
  }

  updateRecord(record: Record) {
  let data = {
    description: record.description
  };
    /*
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.baseUrl + 'records/' + record._id, data, {headers: headers}).map(res => res.json());
    */
    return this.http.put(this.baseUrl + 'records/' + record._id, data).map(res => res.json());
  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
