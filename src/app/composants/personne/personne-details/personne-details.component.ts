import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

  id!: number;
  personne!: Personne;

  constructor(private route: ActivatedRoute, private service: PersonneService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getPerson(this.id).subscribe(pers => {
      console.log(pers);
      this.personne = pers;
    });
  }

  back() {
    this.router.navigate(['personne']);
  }
}
