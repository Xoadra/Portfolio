



import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'



@Component( {
	selector: 'bio',
	templateUrl: './bio.component.html',
	styleUrls: [ './bio.component.css' ]
} )

	
export class BioComponent implements OnInit {
	
	// Quote information grabbed from the backend
	private quote: string
	private author: string
	
	
	constructor( private _httpService: HttpClient ) {  }


	ngOnInit( ) {
		this._httpService.get<object>( '/quote' ).subscribe( quotes => {
			this.quote = quotes[ "Quote" ]
			this.author = quotes[ "Author" ]
		} )
		/* this._httpService.get<object[ ]>( '/users' ).subscribe( users => {
			console.log( users )
		} ) */
	}

}


