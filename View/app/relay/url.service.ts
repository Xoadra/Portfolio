



import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
//import { filter } from 'rxjs/operators'



@Injectable( )


export class UrlService {
	
	priorUrl: string // Appears to track prior routes without using 'priorUrl', but maintaining just in case
	wasActive: boolean
	itemVessel: string
	

	constructor( private _title: Title, private _route: Router ) {
		//.pipe( filter( o => o instanceof NavigationStart ) )
		_route.events.subscribe( url => {
			this.priorUrl = _route.url
		 } )
	}
	
	
	viewUrl( ) {
		return this._route.url
	}
	
	getTitle( ) {
		return this._title.getTitle( )
	}
	
	setTitle( title: string ) {
		this._title.setTitle( title )
	}
	
	navigate( url: string ) {
		this._route.navigate( [ url ] )
	}

}



