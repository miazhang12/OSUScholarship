import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data service connected...');
  }

  getJSON(): Observable<any>{
    return this.http.get('https://api.myjson.com/bins/ynziv')
      .map((res: any) => res.json());
  }
}
