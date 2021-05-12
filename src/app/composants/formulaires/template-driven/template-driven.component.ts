import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  // result: string = '';
  // nom: string ='';
  personnes: Array<Personne> = [];
  personne: Personne = {};

  constructor() { }

  ngOnInit(): void {
  }

  ajouterPersonne(myForm: NgForm) {
    this.personnes.push({ ...this.personne });
    // this.personne.nom = '';
    // this.personne.prenom = '';
    myForm.form.markAsPristine();
    myForm.form.reset();
    console.log(this.personnes);
  }

  // direBonjour(nom: string) {
  //   this.result = this.nom;
  // }

}
