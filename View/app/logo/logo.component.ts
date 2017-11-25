



import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component( {
	selector: 'logo',
	templateUrl: './logo.component.html',
	styleUrls: [ './logo.component.css' ]
} )


export class LogoComponent implements OnInit {

	@Output( ) pop = new EventEmitter( )
	


	constructor( ) {  }
	

	login( ) {
		this.pop.emit( true )
	}


	ngOnInit( ) {  }

}



