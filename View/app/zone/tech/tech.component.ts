



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'



@Component( {
	selector: 'tech',
	templateUrl: './tech.component.html'
} )

	
export class TechComponent implements OnInit {

	private title: string = 'Programming Explained'


	constructor( private _title: Title, private _route: Router ) {  }

	
	ngOnInit( ) {
		if ( this._route.url === '/tech' ) {
			this._title.setTitle( 'Xambda | ' + this.title )
		}
	}

}


