import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-update',
  templateUrl: './personne-update.component.html',
  styleUrls: ['./personne-update.component.css']
})
export class PersonneUpdateComponent implements OnInit {

  id!: number;
  personne!: Personne;

  constructor(private route: ActivatedRoute, private service: PersonneService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getPerson(this.id).subscribe(data => {
      this.personne = { ...data };
    });
  }

  updatePerson() {
    this.service.updatePersonne(this.personne).subscribe(data => {
      console.log(data);
      this.back();
    });
  }

  back() {
    this.router.navigate(['personne']);
  }
}
