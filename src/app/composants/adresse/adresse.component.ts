import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  nom: string = 'Wick';
  prenom: string = 'John';


  constructor(private routeur: Router) { }

  ngOnInit(): void {
  }

  goToStagiaire() {
    this.routeur.navigate(['/stagiaire', this.nom, this.prenom]);
    // ou
    // this.routeur.navigateByUrl('/stagiaire/' + this.nom + '/' + this.prenom);
  }

}
