import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  constructor(public service: HttpClient) { }

  getCards(): Observable<any> {
    let myURL = 'https://opentdb.com/api.php?amount=10';
    return this.service.get(myURL);
  }
}
