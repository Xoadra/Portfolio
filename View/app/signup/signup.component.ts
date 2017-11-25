



import { Component, OnInit } from '@angular/core';



@Component( {
	selector: 'signup',
	templateUrl: './signup.component.html',
	styleUrls: [ './signup.component.css' ]
} )

	
export class SignupComponent implements OnInit {

	label: string = 'Register'
	register: boolean = false


	constructor( ) {  }


	ngOnInit( ) {  }

}


