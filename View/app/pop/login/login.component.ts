



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { UrlService } from '../../relay/url.service'

import { FadeAnimation } from '../../act/fade.animation'



@Component( {
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ],
	animations: [ FadeAnimation ]
} )

	
export class LoginComponent implements OnInit {

	private title: string = 'Login Here!'
	private fade: boolean = true
	private prior: string


	constructor( private _title: Title, private _back: Router, private _url: UrlService ) {
		this.prior = _url.priorUrl
	}
	
	
	ngOnInit( ) {
		this._title.setTitle( 'Xambda | ' + this.title )
	}

	exit( ) {
		this.fade = false
		setTimeout( temporal => {
			if ( this.prior !== undefined ) {
				this._back.navigate( [ this.prior ] )
			}
			else {
				this._back.navigate( [ '/' ] )
			}
		}, 1000 )
	}

}


