import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../components/others/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  getPhotos(limits: number = 30): Observable<Photos[]>{
    return this._http.get<Photos[]>(this.apiUrl).
    pipe(
      map((data: Photos[]) => data.slice(0, limits))
    );
  }
}
