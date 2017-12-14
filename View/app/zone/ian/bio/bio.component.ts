



import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'



@Component( {
	selector: 'bio',
	templateUrl: './bio.component.html',
	styleUrls: [ './bio.component.css' ]
} )

	
export class BioComponent implements OnInit {
	
	private quotes: string[ ] = [ ]
	
	
	constructor( private _httpService: HttpClient ) {  }


	ngOnInit( ) {
		/* this._httpService.get( 'prime' ).subscribe( phrases => {
			this.quotes = phrases.json( ) as string[ ]
		} ) */
	}

}


