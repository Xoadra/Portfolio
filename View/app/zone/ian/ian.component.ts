



import { Component, OnInit } from '@angular/core'

import { UrlService } from '../../relay/url.service'



@Component( {
	selector: 'ian',
	templateUrl: './ian.component.html'
} )


export class IanComponent implements OnInit {

	private title: string = 'Ian Peterson\'s Tech Platform'


	constructor( private _url: UrlService ) {  }

	
	ngOnInit( ) {
		if ( this._url.viewUrl( ) === '/' ) {
			this._url.setTitle( 'Xambda | ' + this.title )
		}
	}

}


