



import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
//import { filter } from 'rxjs/operators'



@Injectable( )


export class UrlService {
	
	priorUrl: string
	

	constructor( private _route: Router ) {
		//.pipe( filter( o => o instanceof NavigationStart ) )
		_route.events.subscribe( n => this.priorUrl = _route.url )
	}

}



