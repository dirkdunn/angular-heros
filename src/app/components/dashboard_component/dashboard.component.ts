import {Component, OnInit} from '@angular/core';
import {Hero} from '../../interfaces';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  heroes:Hero[] = [];

  constructor(
    private heroService: HeroService
  ){}

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes.slice(1,5);
    })
  }


}
