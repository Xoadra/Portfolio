



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.css' ]
} )

	
export class AuthComponent implements OnInit {

	title: string = 'Login Here!'


	constructor( private back: Router, private _url: UrlService ) {  }
	

	exit( ) {
		this.back.navigate( [ '' ] ) // Will Need Previous Route Params Inserted
	}
	

	ngOnInit( ) {
		console.log( 'TO AUTH: ' + this._url.priorUrl )
	}

}


