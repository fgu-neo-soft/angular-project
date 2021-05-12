import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {


  personnes: Array<Personne> = new Array<Personne>();
  personne: Personne = {};

  constructor(private service: PersonneService, private routeur: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    // this.service.getAllPersons().subscribe(data => {
    //   this.personnes = data;
    // });
    this.route.data.subscribe(res => {
      this.personnes = res.routeResolver;
    })
  }

  savePerson() {
    this.service.addPerson(this.personne).subscribe(data => {
      console.log(data);
      this.reloadData();
    });
  }

  personDetails(id: any) {
    this.routeur.navigate(['personne', id]);
  }

  personUpdate(id: any) {
    this.routeur.navigate(['personne', 'update', id]);
  }

  personDelete(id: any) {
    this.service.deletePerson(id).subscribe(data => {
      this.reloadData();
    });
  }

}
