



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
	
	
	constructor( private _http: HttpClient ) {  }


	ngOnInit( ) {
		// Get values from backend to display on page as a quote
		this._http.get<object>( '/quote' ).subscribe( quotes => {
			this.quote = quotes[ 'quote' ]
			this.author = quotes[ 'author' ]
		} )
	}

}


