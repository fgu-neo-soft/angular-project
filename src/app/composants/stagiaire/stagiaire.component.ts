import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  nom: any;
  prenom: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // parametres de chemin /nom/prenom, synchrone (snapshot)
    // this.nom = this.route.snapshot.params.nom;
    // this.prenom = this.route.snapshot.params.prenom;
    // console.log(this.nom + ' ' + this.prenom);

    // asynchrone (observables)
    this.route.paramMap.subscribe(res => {
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
    })

    // parametres d'url ?nom=xxx&prenom=yyy, synchrone (snapshot)
    // this.nom = this.route.snapshot.queryParams.nom;
    // this.prenom = this.route.snapshot.queryParams.prenom;

    // asynchrone (observables)
    // this.route.queryParamMap.subscribe(res => {
    //   this.nom = res.get('nom');
    //   this.prenom = res.get('prenom');
    // })
  }

}
