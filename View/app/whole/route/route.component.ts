



import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'route',
	templateUrl: './route.component.html',
	styleUrls: [ './route.component.css' ]
} )


export class RouteComponent implements OnInit {

	online: boolean = false // Temporary Switch Between Guest and User Panels
	

	constructor( private route: Router, private _url: UrlService ) {  }
	

	status( ) {
		this._url.priorUrl = this.route.url
		if ( this.online === false ) {
			this.online = true // Temporary Switch Between Guest and User Panels
		}
		else {
			this.online = false // Temporary Switch Between Guest and User Panels
		}
	}
	
	profile( ) {  }
	

	ngOnInit( ) {  }

}


