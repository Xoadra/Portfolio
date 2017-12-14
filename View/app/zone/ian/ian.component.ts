



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'



@Component( {
	selector: 'ian',
	templateUrl: './ian.component.html'
} )


export class IanComponent implements OnInit {

	private title: string = 'Ian Peterson\'s Tech Platform'


	constructor( private _title: Title, private _route: Router ) {  }

	
	ngOnInit( ) {
		if ( this._route.url === '/' ) {
			this._title.setTitle( 'Xambda | ' + this.title )
		}
	}

}


