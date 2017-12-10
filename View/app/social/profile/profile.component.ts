



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ]
} )

	
export class ProfileComponent implements OnInit {

	title: string = 'Your Profile'
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



