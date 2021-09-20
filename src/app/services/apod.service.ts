import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  constructor(public service: HttpClient) { }

  getApodData(dateString?:string): Observable<any> {
    let myURL = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
    if(dateString !== undefined) {
      myURL = myURL + '&date=' + dateString;
    }
    return this.service.get(myURL);
  }
}
