



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
			state( 'active', style( { opacity: '1' } ) ),
			state( 'inactive', style( { opacity: '1' } ) ),
			transition( '* => active', [
				style( { opacity: '0' } ),
				animate( 300 )
			] ),
			transition( '* => inactive', [
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
			this.view = 'inactive'
			this.subject = this._url.itemVessel
			this.goBack( )
		}
		else {
			this.view = 'active'
		}
	}
	
	
	goBack( ) {
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


