



import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

import { UrlService } from '../../../relay/url.service'



@Component( {
	selector: 'theme',
	templateUrl: './theme.component.html',
	styleUrls: [ './theme.component.css' ]
} )


export class ThemeComponent {
	
	private browse: boolean = false
	private subject: string


	constructor( private _route: Router, private _url: UrlService ) {
		if ( this._route.url !== '/blog' && this._url.wasActive ) {
			this.browse = true
			this.subject = this._url.itemVessel
			this.changeState( true )
		}
	}
	
	
	selectSubject( subject: string ) {
		this.subject = subject
		this._url.itemVessel = this.subject
		this.changeState( true )
	}
	
	changeState( view: boolean ) {
		if ( !view ) {
			setTimeout( temporal => {
				this.browse = view
				this._url.wasActive = this.browse
				this._url.itemVessel = undefined
			}, 150 )
		}
		else {
			this.browse = view
			this._url.wasActive = this.browse
		}
	}

}



