



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { UrlService } from '../../relay/url.service'

import { FadeAnimation } from '../../act/fade.animation'



@Component( {
	selector: 'resume',
	templateUrl: './resume.component.html',
	styleUrls: [ './resume.component.css' ],
	animations: [ FadeAnimation ]
} )


export class ResumeComponent implements OnInit {

	private title: string = 'Ian\'s Tech Resume'
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

