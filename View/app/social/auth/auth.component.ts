



import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
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


	constructor( private back: Router, private _url: UrlService ) {
		this.prior = this._url.priorUrl
	}
	

	exit( ) {
		if ( this.prior != undefined ) {
			this.back.navigate( [ this.prior ] )
		}
		else {
			this.back.navigate( [ '/' ] )
		}
	}
	

	ngOnInit( ) {  }

}


