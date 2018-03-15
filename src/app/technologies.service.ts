import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Technology } from './technology.model';

@Injectable()
export class TechnologiesService {
  constructor(
    private http: HttpClient
  ) {}

  saveData(data: Technology[]): Observable<{}> {
    // return this.http.put(
    //   'https://ng-http-client-6e6bc.firebaseio.com/technologies.json',
    //   data,
    //   {
    //     params: new HttpParams().set('test', 'test')
    //   }
    // );
    const request = new HttpRequest(
      'PUT',
      '/technologies.json',
      data,
      {
        reportProgress: true
      });
    return this.http.request(request);
  }

  getData(): Observable<Technology[]> {
    return this.http.get<Technology[]>(
      '/technologies.json',
      {
        observe: 'body',
        responseType: 'json'
      }
    ).map(
      (data) => {
        console.log(data);
        return data;
      }
    );
  }
}
