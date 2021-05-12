import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Personne } from '../interfaces/personne';
import { PersonneService } from '../shared/personne.service';

@Injectable({
  providedIn: 'root'
})
export class PersonListResolver implements Resolve<Personne[]> {

  constructor(private service: PersonneService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Personne[]> {
    return this.service.getAllPersons()
    .pipe(
      map(res => {
        console.log(res);
        return res || {};
      }),
      catchError(() => {
        this.router.navigate(['/error']);
        return EMPTY;
      })
    );
  }
}
