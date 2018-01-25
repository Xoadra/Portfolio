



import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { UrlService } from '../../relay/url.service'
import { WatchService } from '../../relay/watch.service'

import { FallAnimation } from '../../act/fall.animation'
import { ShadeAnimation } from '../../act/shade.animation'



@Component( {
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ],
	animations: [ FallAnimation, ShadeAnimation ]
} )


export class ProfileComponent implements OnInit {

	private title: string = 'Your Profile'
	private shade: boolean = true
	private prior: string


	constructor( private _http: HttpClient, private _url: UrlService, private _watch: WatchService ) {
		this.prior = _url.priorUrl // Memorize previously visited route for proper background display and redirects
		this._watch.setWatch( ) // Begin tracking time for enter-to-leave animation smoothing
	}
	

	ngOnInit( ) {
		// Parse and log data sent by the backend from database
		this._http.get<object[ ]>( '/data' ).subscribe( users => {
			console.log( users )
		} )
		this._url.setTitle( 'Xambda | ' + this.title )
	}

	exitView( ) {
		if ( this._watch.isTimeMachine( this._watch.getElapsed( 750 ) ) ) { // Set page load offset time
			return // Delay page exit and leave animation if enough time hasn't elapsed
		}
		else {
			this.shade = false
			setTimeout( temporal => {
				if ( this.prior !== undefined ) {
					this._url.navigate( this.prior )
				}
				else {
					this._url.navigate( '/' )
				}
			}, 1500 )
		}
	}

}



