



import { Component, OnInit } from '@angular/core'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'route',
	templateUrl: './route.component.html',
	styleUrls: [ './route.component.css' ]
} )


export class RouteComponent implements OnInit {

	online: boolean = false // Temporary Switch Between Guest and User Panels
	

	constructor( private _url: UrlService ) {  } // Pull in service to begin tracking route changes.
	

	swapStatus( ) {
		if ( this.online === false ) {
			this.online = true // Temporary Switch Between Guest and User Panels
		}
		else {
			this.online = false // Temporary Switch Between Guest and User Panels
		}
	}
	

	ngOnInit( ) {  }

}



