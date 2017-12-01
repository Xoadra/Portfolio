



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'route',
	templateUrl: './route.component.html',
	styleUrls: [ './route.component.css' ]
} )


export class RouteComponent implements OnInit {

	friend: boolean = false
	

	constructor( private route: Router, private _url: UrlService ) {  }
	

	login( ) {
		this._url.priorUrl = this.route.url
		this.friend = true // Temporary Switch Between Guest and User Panels
		console.log( 'FROM ROUTE: ' + this._url.priorUrl )
	}

	logout( ) {
		this.friend = false // Temporary Switch Between Guest and User Panels
	}

	
	ngOnInit( ) {  }

}


