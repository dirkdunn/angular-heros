import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-root'
  ,template:`
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
  // ,templateUrl: './app.component.html'
  ,styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  ngOnInit(){
    this.title = 'Tour of Heroes';
  }
}
