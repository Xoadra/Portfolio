



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'route',
	templateUrl: './route.component.html',
	styleUrls: [ './route.component.css' ]
} )


export class RouteComponent implements OnInit {

	online: boolean = false // Temporary Switch Between Guest and User Panels
	

	constructor( private _route: Router, private _url: UrlService ) {  }
	

	swapStatus( ) {
		this.getPriorRoute( )
		if ( this.online === false ) {
			this.online = true // Temporary Switch Between Guest and User Panels
		}
		else {
			this.online = false // Temporary Switch Between Guest and User Panels
		}
	}
	
	getPriorRoute( ) {
		this._url.priorUrl = this._route.url
	}
	

	ngOnInit( ) {  }

}



