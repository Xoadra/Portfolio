



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { UrlService } from '../../transit/url.service'



@Component( {
	selector: 'resume',
	templateUrl: './resume.component.html',
	styleUrls: [ './resume.component.css' ]
} )


export class ResumeComponent implements OnInit {

	title: string = 'Ian\'s Tech Resume'
	prior: string


	constructor( private _back: Router, private _url: UrlService ) {
		this.prior = this._url.priorUrl
	}
	

	exit( ) {
		if ( this.prior != undefined ) {
			this._back.navigate( [ this.prior ] )
		}
		else {
			this._back.navigate( [ '/' ] )
		}
	}

	
	ngOnInit( ) {  }

}



