



import { Component, OnInit } from '@angular/core'

import { UrlService } from '../../relay/url.service'
import { WatchService } from '../../relay/watch.service'

import { FallAnimation } from '../../act/fall.animation'
import { ShadeAnimation } from '../../act/shade.animation'



@Component( {
	selector: 'mail',
	templateUrl: './mail.component.html',
	styleUrls: [ './mail.component.css' ],
	animations: [ FallAnimation, ShadeAnimation ]
} )


export class MailComponent implements OnInit {

	private title: string = 'Send Me Your Robots!'
	private shade: boolean = true
	private prior: string


	constructor( private _url: UrlService, private _watch: WatchService ) {
		this.prior = _url.priorUrl // Memorize previously visited route for proper background display and redirects
		this._watch.setWatch( ) // Begin tracking time for enter-to-leave animation smoothing
	}
	
	
	ngOnInit( ) {
		this._url.setTitle( 'Xambda | ' + this.title )
	}

	exitView( ) {
		if ( this._watch.isTimeMachine( this._watch.getElapsed( 1000 ) ) ) { // Set page load offset time
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


