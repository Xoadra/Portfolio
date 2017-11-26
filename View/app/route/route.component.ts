



import { Component, OnInit, /* Output, */ EventEmitter } from '@angular/core';



@Component( {
	selector: 'route',
	templateUrl: './route.component.html',
	styleUrls: [ './route.component.css' ]
} )


export class RouteComponent implements OnInit {

	//@Output( ) pop = new EventEmitter( )
	


	friend: boolean = false
	

	constructor( ) {  }
	

	login( ) {
		this.friend = true // Temporary Switch Between Guest and User Panels
		//this.pop.emit( true )
	}

	logout( ) {
		this.friend = false // Temporary Switch Between Guest and User Panels
	}

	
	ngOnInit( ) {  }

}



