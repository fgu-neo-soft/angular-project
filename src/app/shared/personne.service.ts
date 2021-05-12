import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Personne } from '../interfaces/personne';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {


  // endpoint
  url: string = 'http://localhost:5557/personnes'
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // injection de httpclient
  constructor(private http: HttpClient) { }

  getAllPersons(): Observable<Personne[]> {
    let API_URL = `${this.url}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // addPerson(p: Personne) {
  //   return this.http.post(this.url, p);
  // }
  addPerson(data: Personne): Observable<Personne> {
    return this.http.post(this.url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  getPerson(id: any): Observable<Personne> {
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  deletePerson(id: any): Observable<any> {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  updatePersonne(data: Personne): Observable<Personne> {
    let API_URL = `${this.url}/${data.id}`;
    return this.http.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // Gère les erreurs par rapport au coté serveur
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
