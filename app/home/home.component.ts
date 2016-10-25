import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'home',
    template: `
	<h1>{{title}}</h1>
	<div>
	    <span>路由：{{name}}</span>
    </div>
  `
})
export class HomeComponent implements OnInit{

    title = '啦啦啦啦啦啦';
    name: number;

    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let channel = this.route.snapshot.params['id'];
        this.name = channel;
    }
}
