



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { UrlService } from '../../relay/url.service'
import { WatchService } from '../../relay/watch.service'

import { FallAnimation } from '../../act/fall.animation'
import { ShadeAnimation } from '../../act/shade.animation'



@Component( {
	selector: 'join',
	templateUrl: './join.component.html',
	styleUrls: [ './join.component.css' ],
	animations: [ FallAnimation, ShadeAnimation ]
} )

	
export class JoinComponent implements OnInit {
	
	private title: string = 'Join Us...'
	private shade: boolean = true
	private prior: string
	
	
	constructor( private _title: Title, private _back: Router, private _url: UrlService, private _watch: WatchService ) {
		this.prior = _url.priorUrl // Memorize previously visited route for proper background display and redirects
		this._watch.setWatch( ) // Begin tracking time for enter-to-leave animation smoothing
	}
	
	
	ngOnInit( ) {
		this._title.setTitle( 'Xambda | ' + this.title )
	}

	exitView( ) {
		if ( this._watch.isTimeMachine( this._watch.getElapsed( 750 ) ) ) { // Set page load offset time
			return // Delay page exit and leave animation if enough time hasn't elapsed
		}
		else {
			this.shade = false
			setTimeout( temporal => {
				if ( this.prior !== undefined ) {
					this._back.navigate( [ this.prior ] )
				}
				else {
					this._back.navigate( [ '/' ] )
				}
			}, 1500 )
		}
	}
 
}


