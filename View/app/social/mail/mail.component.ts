



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'mail',
	templateUrl: './mail.component.html',
	styleUrls: [ './mail.component.css' ]
} )


export class MailComponent implements OnInit {

	title: string = 'Send Me Your Robots'
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



