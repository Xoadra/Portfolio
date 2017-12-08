



import { Component, OnInit } from '@angular/core';



@Component( {
	selector: 'theme',
	templateUrl: './theme.component.html',
	styleUrls: [ './theme.component.css' ]
} )

	
export class ThemeComponent implements OnInit {
	
	// Placeholder component activation triggers
	industry: boolean = false
	coding: boolean = false
	events: boolean = false
	startup: boolean = false
	hiring: boolean = false
	production: boolean = false
	future: boolean = false
	

	constructor( ) {  }
	
	
	// Temporary component state changer
	triggerSubject( subject: boolean ) {
		if ( this.industry === false ) {
			this.industry = true
		}
		else {
			this.industry = false
		}
	}

	
	ngOnInit( ) {  }

}



