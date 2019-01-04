import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from "../../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://5c209feaf3e8d200133b6652.mockapi.io/api/Employee/';
  private httpOption = {
    headers : new HttpHeaders({'Content-type': 'application/json'})
  };
  constructor(private _http : HttpClient) { }
  //Get list employee
  getList(): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl, this.httpOption)
          .pipe(
            tap(_ => this.log('fetched Emp')),
            catchError(this.handleError('getEmp', [])),
            map((response : any[]) =>{
            return response;
          }))
      };
  searchEmp(key : string): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl + '?search=' + key, this.httpOption)
          .pipe(
            tap(_ => this.log('fetched Emp')),
            catchError(this.handleError('getEmp', [])),
            map((response : any[]) =>{
            return response;
          }))
      };
  //get employee by id
  getEmployeeById(id: number): Observable<Employee>{
    return this._http.get<Employee>(this.apiUrl + id, this.httpOption)
    .pipe(
      catchError(this.handleError('getEmp', [])),
      map((data : any) => {
      return data;
    }))
  }
// add new employee
  Add(emp: Employee): Observable<Employee>{
    return this._http.post(this.apiUrl, emp, this.httpOption)
    .pipe(
      catchError(this.handleError('getEmp', [])),
      map((data : any) => {
      return data;
    }))
  }
// update employee
  Update(emp: any): Observable<any>{
    return this._http.put(this.apiUrl + emp.id, emp)
    .pipe(
      catchError(this.handleError('getEmp', [])),
      map((data : any) => {
      return data;
    }))
  }
// Delete employee
  Delete(id: number): Observable<any>{
    return this._http.delete(this.apiUrl + id)
    .pipe(
      catchError(this.handleError('getEmp', [])),
      map((data : any) => {
      return data;
    }))
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
