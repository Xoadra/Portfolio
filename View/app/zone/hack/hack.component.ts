



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'



@Component( {
	selector: 'hack',
	templateUrl: './hack.component.html'
} )

	
export class HackComponent implements OnInit {

	private title: string = 'Up Your Hackery'


	constructor( private _title: Title, private _route: Router ) {  }

	
	ngOnInit( ) {
		if ( this._route.url === '/hack' ) {
			this._title.setTitle( 'Xambda | ' + this.title )
		}
	}

}


