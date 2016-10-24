import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: `
	<h1>{{title}}</h1>
	<div>
	    <span>啦啦啦啦啦啦啦啦啦</span>
    </div>
  `
})
export class HomeComponent {
    title = '啦啦啦啦啦啦';
}
