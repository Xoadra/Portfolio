



import { Component, OnInit } from '@angular/core';



@Component( {
	selector: 'quote',
	templateUrl: './quote.component.html',
	styleUrls: [ './quote.component.css' ]
} )

	
export class QuoteComponent implements OnInit {

	quotes: object[ ] = [
		{ "author": "" },
		{ "author": "" },
		{ "author": "" },
		{ "author": "" },
		{ "author": "" },
		{ "author": "" },
		{ "author": "" },
		{ "author": "" },
		{ "author": "" },
		{ "author": "" }
	]

	constructor( ) {  }

	ngOnInit( ) {  }

}


