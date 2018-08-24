import { throwError as observableThrowError, Observable } from 'rxjs';
import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    // return  [
    //   {"id":1, "name": "Marlene", "age": 33},
    //   {"id":2, "name": "Romain", "age": 31},
    //   {"id":3, "name": "Tommy", "age": 28},
    //   {"id":4, "name": "Vinz", "age": 37},

    // ]
    return this.http.get<IEmployee[]>(this._url).pipe(
    catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "server error")
  }
}
