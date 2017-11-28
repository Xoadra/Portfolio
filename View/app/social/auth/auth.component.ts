



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component( {
	selector: 'auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.css' ]
} )

	
export class AuthComponent implements OnInit {

	//@Output( ) close = new EventEmitter( ) // Placeholder For Non-Routed Closure
	
	

	private title: string = 'Login Here!'


	constructor( private back: Router ) {  }
	

	exit( ) {
		//this.close.emit( open ) // Placeholder For Non-Routed Closure
		this.back.navigate( [ '' ] ) // Will Need Previous Route Params Inserted
	}
	

	ngOnInit( ) {  }

}


