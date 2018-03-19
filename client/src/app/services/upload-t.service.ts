import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';


@Injectable()
export class UploadTService {
  base_URL= 'http://localhost:3000/api';
  options= { withCredentials: true };
  
  constructor(private http: Http) { }

  handleError(e) {
    alert(e.message)
    return Observable.throw(e.message);
  }

  uploadTrip(trip) {
    return this.http.post(`${this.base_URL}/creator`, trip, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err.json()));
  }
}

