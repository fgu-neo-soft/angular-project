import { Injectable } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateDrivenComponent } from '../composants/formulaires/template-driven/template-driven.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<TemplateDrivenComponent> {
  canDeactivate(
    component: TemplateDrivenComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot):
    boolean {
    return component.personne.nom == undefined
      || component.personne.prenom == undefined
      || component.personne.nom.length == 0
      || component.personne.prenom.length == 0
      || confirm('Voulez-vous abandonner la saisie en cours ?');
  }


}
