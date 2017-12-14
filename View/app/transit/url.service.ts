



import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
//import { filter } from 'rxjs/operators'



@Injectable( )


export class UrlService {
	
	priorUrl: string // Appears to track prior routes without using 'priorUrl', but maintaining just in case
	

	constructor( private _route: Router ) {
		//.pipe( filter( o => o instanceof NavigationStart ) )
		_route.events.subscribe( url => this.priorUrl = _route.url )
	}

}



