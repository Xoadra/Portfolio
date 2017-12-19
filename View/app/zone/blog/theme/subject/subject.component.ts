



import { Component, Input, Output, EventEmitter } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { Router } from '@angular/router'

import { UrlService } from '../../../../relay/url.service'



@Component( {
	selector: 'subject',
	templateUrl: './subject.component.html',
	styleUrls: [ './subject.component.css' ],
	animations: [
		trigger( 'viewSeries', [
			state( 'browse', style( { opacity: '1' } ) ),
			state( 'foreign', style( { opacity: '1' } ) ),
			transition( '* => browse', [
				style( { opacity: '0' } ),
				animate( 300 )
			] ),
			transition( '* => foreign', [
				style( { opacity: '0' } ),
				animate( 0 )
			] ),
			transition( '* => void', [
				animate( 150, style( { opacity: '0' } ) ) 
			] )
		] )
	]
} )


export class SubjectComponent {
	
	@Input( ) subject: string
	@Output( ) delete = new EventEmitter( )
	
	
	private browse: boolean = true
	private view: string
	
	
	constructor( private _route: Router, private _url: UrlService ) {
		this._url.wasActive = this.browse
		if ( this._route.url !== '/blog' && this._url.wasActive ) {
			this.view = 'foreign'
			this.subject = this._url.itemVessel
			this.terminateBrowse( )
		}
		else {
			this.view = 'browse'
		}
	}
	
	
	terminateBrowse( ) {
		if ( this._route.url !== '/blog' ) {
			setTimeout( temporal => {
				this.browse = false
				this._url.wasActive = this.browse
				this.delete.emit( this.browse )
			}, 750 )
		}
		else {
			this.browse = false
			this._url.wasActive = this.browse
			this.delete.emit( this.browse )
		}
	}

}


