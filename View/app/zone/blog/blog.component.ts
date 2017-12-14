



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'



@Component( {
	selector: 'blog',
	templateUrl: './blog.component.html'
} )

	
export class BlogComponent implements OnInit {

	private title: string = 'Technology: Now & Ahead'


	constructor( private _title: Title, private _route: Router ) {  }
	
	
	ngOnInit( ) {
		if ( this._route.url === '/blog' ) {
			this._title.setTitle( 'Xambda | ' + this.title )
		}
	}

}


