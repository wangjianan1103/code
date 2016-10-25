import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
	<h1>{{title}}</h1>
	<nav>
		<a routerLink="/detail">detail</a>
		<a routerLink="/detail/name">name</a>
		<a routerLink="/detail/type">type</a>
	</nav>
	<router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
