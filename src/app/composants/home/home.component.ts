import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Formation Angular';
  personne: Personne = new Personne(451, 'Wick', 'John');

  tab: number[] = [2, 3, 5, 8, 12, 15, 18];

  nom: string = 'Wick';
  couleur: string = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

  direBonjour = () => 'Bonjour Angular !';

  getColor() {
    return 'blue';
  }

  getBackgroundColor() {
    return 'red';
  }

  estPair(elt: number) {
    return elt % 2 === 0;
  }

  tasks = [
    {
      name: 'EATING',
      status: 'doing'
    },
    {
      name: 'DRINKING',
      status: 'running'
    },
    {
      name: 'SLEEPING',
      status: 'done'
    }
  ];
}
