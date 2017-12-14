



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'



@Component( {
	selector: 'work',
	templateUrl: './work.component.html'
} )

	
export class WorkComponent implements OnInit {

	private title: string = 'Software Portfolio'


	constructor( private _title: Title, private _route: Router ) {  }

	
	ngOnInit( ) {
		if ( this._route.url === '/work' ) {
			this._title.setTitle( 'Xambda | ' + this.title )
		}
	}

}


