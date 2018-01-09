



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { WatchService } from '../../../../relay/watch.service'

import { FallAnimation } from '../../../../act/fall.animation'
import { ShadeAnimation } from '../../../../act/shade.animation'



@Component( {
	selector: 'inquiry',
	templateUrl: './inquiry.component.html',
	styleUrls: [ './inquiry.component.css' ],
	animations: [ FallAnimation, ShadeAnimation ]
} )


export class InquiryComponent implements OnInit {

	private title: string = 'What Do You Want To Learn?'
	private shade: boolean = true
	private before: string


	constructor( private _title: Title, private _back: Router, private _watch: WatchService ) {
		this._watch.setWatch( ) // Begin tracking time for enter-to-leave animation smoothing
	}


	ngOnInit( ) {
		this.before = this._title.getTitle( ) // Store parent page's title so it can remember until redirecting back
		this._title.setTitle( 'Xambda | ' + this.title )
	}
	
	goBack( ) {
		if ( this._watch.isTimeMachine( this._watch.getElapsed( 750 ) ) ) { // Set page load offset time
			return // Delay page exit and leave animation if enough time hasn't elapsed
		}
		else {
			this.shade = false
			setTimeout( temporal => {
				this._back.navigate( [ '/tech' ] )
				this._title.setTitle( this.before )
			}, 1500 )
		}
	}

}


