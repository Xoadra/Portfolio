



import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component( {
	selector: 'route',
	templateUrl: './route.component.html',
	styleUrls: [ './route.component.css' ]
} )


export class RouteComponent implements OnInit {

	@Output( ) pop = new EventEmitter( )
	
	
	
	constructor( ) {  }
	

	login( ) {
		this.pop.emit( true )
	}

	
	ngOnInit( ) {  }

}



