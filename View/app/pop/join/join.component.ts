



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { UrlService } from '../../relay/url.service'

import { FadeAnimation } from '../../act/fade.animation'



@Component( {
	selector: 'join',
	templateUrl: './join.component.html',
	styleUrls: [ './join.component.css' ],
	animations: [ FadeAnimation ]
} )

	
export class JoinComponent implements OnInit {
	
	private title: string = 'Join Us...'
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

