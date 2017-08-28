import {Component, Input} from '@angular/core';
import {Hero} from '../../interfaces';

@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
  `
})

export class HeroDetailComponent {
  /* The value of hero is passed in from another component */
  @Input() hero: Hero;
}
