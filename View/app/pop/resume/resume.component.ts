



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { UrlService } from '../../relay/url.service'

import { ShadeAnimation } from '../../act/shade.animation'



@Component( {
	selector: 'resume',
	templateUrl: './resume.component.html',
	styleUrls: [ './resume.component.css' ],
	animations: [ ShadeAnimation ]
} )


export class ResumeComponent implements OnInit {

	private title: string = 'Ian\'s Tech Resume'
	private shade: boolean = true
	private prior: string


	constructor( private _title: Title, private _back: Router, private _url: UrlService ) {
		this.prior = _url.priorUrl
	}

	
	ngOnInit( ) {
		this._title.setTitle( 'Xambda | ' + this.title )
	}

	exit( ) {
		this.shade = false
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


