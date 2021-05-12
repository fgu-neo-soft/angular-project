import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // FormGroup pour composer plusieurs FormControl
  // personneForm = new FormGroup({
  //   id: new FormControl('', Validators.required),
  //   nom: new FormControl('', [Validators.required, this.checkValidatorNom]),
  //   prenom: new FormControl('', [Validators.required, this.checkValidatorPrenom]),
  //   adresse: new FormGroup({
  //     rue: new FormControl('', Validators.required),
  //     ville: new FormControl('', Validators.required),
  //     codePostal: new FormControl('', Validators.required),
  //   }),
  // });

  personneForm = this.fb.group({
    id: [null, [Validators.required]],
    nom: ['', [Validators.required, this.checkValidatorNom]],
    prenom: ['', [Validators.required, this.checkValidatorPrenom]],
    adresse: this.fb.group({
      rue: [null, [Validators.required]],
      ville: [null, [Validators.required]],
      codePostal: [null, [Validators.required]],
    }),
    sports: this.fb.array([]),
  });

  personnes: Array<any> = [];

  constructor(private fb: FormBuilder) { }

  get adresse() {
    return this.personneForm.get('adresse') as FormGroup;
  }
  get nom() {
    return this.personneForm.get('nom') as FormControl;
  }
  get id() {
    return this.personneForm.get('id') as FormControl;
  }
  get prenom() {
    return this.personneForm.get('prenom') as FormControl;
  }
  get rue() {
    return this.adresse.get('rue') as FormControl;
  }
  get sports() {
    return this.personneForm.get('sports') as FormArray;
  }
  checkValidatorNom(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z][a-z]{2,10}/;
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }

  checkValidatorPrenom(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z]/;
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }

  ngOnInit(): void {
    // this.personneForm.setValue({
    //   nom: 'Doe', prenom: 'John', id: 1,
    //   adresse: { rue: 'Rue Royale', ville: 'Paris', codePostal: '75015' }
    // });
    // this.personneForm.patchValue({
    //   nom: 'Doe', prenom: 'John', adresse: { codePostal: '35700' }
    // });
    this.personneForm.patchValue({
      nom: 'Doe', prenom: 'John', id: 1,
      adresse: { rue: 'Rue Royale', ville: 'Paris', codePostal: '75015' }
    });
  }

  afficherTout() {
    console.log(this.personneForm.value);
    console.log(this.personneForm.value.nom);
    console.log(this.personneForm.controls.nom);
    console.log(this.personneForm.controls.nom.value);
    console.log(this.personneForm.get("nom")?.value);
    this.personnes.push(this.personneForm.value);
    this.personneForm.reset();
    this.sports.clear();
    this.personneForm.patchValue({
      nom: 'Doe', prenom: 'John', id: 1,
      adresse: { rue: 'Rue Royale', ville: 'Paris', codePostal: '75015' }
    });
    console.log(this.personnes);
  }

  ajouterSport() {
    this.sports.push(this.fb.control(''));
  }

  supprimerSport(i: number) {
    this.sports.removeAt(i);
  }
}
