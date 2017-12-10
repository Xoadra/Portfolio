



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
} )

	
export class LoginComponent implements OnInit {

	title: string = 'Login Here!'
	prior: string


	constructor( private _back: Router, private _url: UrlService ) {
		this.prior = _url.priorUrl
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



