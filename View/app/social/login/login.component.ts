



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
} )

	
export class LoginComponent implements OnInit {

	private title: string = 'Login Here!'
	private prior: string


	constructor( private _title: Title, private _back: Router, private _url: UrlService ) {
		this.prior = _url.priorUrl
	}
	
	
	ngOnInit( ) {
		this._title.setTitle( 'Xambda | ' + this.title )
	}

	exit( ) {
		if ( this.prior !== undefined ) {
			this._back.navigate( [ this.prior ] )
		}
		else {
			this._back.navigate( [ '/' ] )
		}
	}

}



