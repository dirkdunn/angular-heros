import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces';
import {HeroService} from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  HEROES: Hero[];

  constructor(
    private heroService: HeroService,
    private router : Router
  ){}

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

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id])
  }

}
