



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.css' ]
} )

	
export class AuthComponent implements OnInit {

	title: string = 'Login Here!'
	prior: string


	constructor( private _back: Router, private _url: UrlService ) {
		this.prior = this._url.priorUrl
	}
	

	exit( ) {
		if ( this.prior != undefined ) {
			this._back.navigate( [ this.prior ] )
		}
		else {
			this._back.navigate( [ '/' ] )
		}
	}
	

	ngOnInit( ) {  }

}



