



import { Component, OnInit } from '@angular/core'

import { UrlService } from '../../relay/url.service'



@Component( {
	selector: 'tech',
	templateUrl: './tech.component.html'
} )

	
export class TechComponent implements OnInit {

	private title: string = 'Programming Explained'
	private prime: boolean = true


	constructor( private _url: UrlService ) {  }

	
	ngOnInit( ) {
		if ( this._url.viewUrl( ) === '/tech' ) {
			this._url.setTitle( 'Xambda | ' + this.title )
		}
	}

}



