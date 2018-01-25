



import { Component, OnInit } from '@angular/core'

import { UrlService } from '../../relay/url.service'



@Component( {
	selector: 'work',
	templateUrl: './work.component.html'
} )

	
export class WorkComponent implements OnInit {

	private title: string = 'Software Portfolio'


	constructor( private _url: UrlService ) {  }

	
	ngOnInit( ) {
		if ( this._url.viewUrl( ) === '/work' ) {
			this._url.setTitle( 'Xambda | ' + this.title )
		}
	}

}


