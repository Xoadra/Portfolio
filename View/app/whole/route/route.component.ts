



import { Component } from '@angular/core'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'route',
	templateUrl: './route.component.html',
	styleUrls: [ './route.component.css' ]
} )


export class RouteComponent {

	private online: boolean = false // Temporary switch between guest and user panels
	

	constructor( private _url: UrlService ) {  } // Pull in service to begin tracking route changes
	

	swapStatus( ) {
		this.online = this.online === true ? false : true // Temporary switch between guest and user panels
	}

}



