import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor(private router: Router) { }

  tabs: any[] = [
    {
      title: 'Accueil',
      path: 'home'
    },
    {
      title: 'Adresse',
      path: 'adresse'
    },
    {
      title: 'Stagiaire',
      path: 'stagiaire'
    },
    {
      title: 'Formulaire (template)',
      path: 'template-driven'
    },
    {
      title: 'Formulaire (reactive)',
      path: 'reactive-form'
    },
    {
      title: 'Personne',
      path: 'personne'
    },
    {
      title: 'Table Material',
      path: 'material-table'
    },
    {
      title: 'Voiture',
      path: 'vehicule/voiture'
    },
    {
      title: 'Camion',
      path: 'vehicule/camion'
    }
  ];

  logOut() {
    localStorage.removeItem('isConnected');
    this.router.navigate(['home']);
  }

  isConnected() {
    if (Boolean(localStorage.getItem('isConnected')))
      return true;
    else
      return false;
  }

}
