import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  constructor(public service: HttpClient) { }

  getApodData(url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-06-24'): Observable<any> {
    return this.service.get(url);
  }
}
