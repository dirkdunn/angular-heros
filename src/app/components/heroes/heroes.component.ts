import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'my-heroes',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of HEROES"
      (click)="onSelect(hero)"
      [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span>
      {{hero.name}}
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
  `
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  HEROES: Hero[];

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().then(heroes => {
      this.HEROES = heroes;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
