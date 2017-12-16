



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { UrlService } from '../../relay/url.service'



@Component( {
	selector: 'mail',
	templateUrl: './mail.component.html',
	styleUrls: [ './mail.component.css' ]
} )


export class MailComponent implements OnInit {

	private title: string = 'Send Me Your Robots!'
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



