



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'join',
	templateUrl: './join.component.html',
	styleUrls: [ './join.component.css' ]
} )

	
export class JoinComponent implements OnInit {

	title: string = 'Join Us...'
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



