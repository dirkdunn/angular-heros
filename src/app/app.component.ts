import { Component, OnInit } from '@angular/core';
import { Hero } from './interfaces';
import {HeroService} from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
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

export class AppComponent implements OnInit {
  title: string;
  selectedHero: Hero;
  HEROES: Hero[];

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.title = 'Tour of Heroes';
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().then(heroes => {
      this.HEROES = heroes;
    });
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
