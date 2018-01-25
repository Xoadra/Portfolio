



import { Component, OnInit } from '@angular/core'

import { UrlService } from '../../relay/url.service'



@Component( {
	selector: 'hack',
	templateUrl: './hack.component.html'
} )

	
export class HackComponent implements OnInit {

	private title: string = 'Up Your Hackery'


	constructor( private _url: UrlService ) {  }

	
	ngOnInit( ) {
		if ( this._url.viewUrl( ) === '/hack' ) {
			this._url.setTitle( 'Xambda | ' + this.title )
		}
	}

}


