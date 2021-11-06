import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Success } from '../interfaces/success';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }


  getSuccess(): Observable<Success[]>{
    return this.http.get<Success[]>('https://api.octopus-cook.com/successes')
  }
}
