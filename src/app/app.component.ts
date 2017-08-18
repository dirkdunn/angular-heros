import { Component } from '@angular/core';
import { Hero } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </div>
  `
})

export class AppComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  title = 'Tour of Heroes';
}
