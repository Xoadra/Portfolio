



import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component( {
	selector: 'auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.css' ]
} )

	
export class AuthComponent implements OnInit {

	@Input( ) login
	@Output( ) close = new EventEmitter( ) // Placeholder For Non-Routed Closure
	
	

	label: string = 'Login Here!'
	open: boolean = true


	constructor( ) {  }
	

	exit( ) {
		this.open = false
		this.close.emit( this.open ) // Placeholder For Non-Routed Closure
	}
	

	ngOnInit( ) {  }

}



