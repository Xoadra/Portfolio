



import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



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


	constructor( private back: Router ) {  }
	

	exit( ) {
		this.open = false
		this.close.emit(open) // Placeholder For Non-Routed Closure
		this.back.navigate( [ '' ] ) // Will Need Previous Route Params Inserted
	}
	

	ngOnInit( ) {  }

}



