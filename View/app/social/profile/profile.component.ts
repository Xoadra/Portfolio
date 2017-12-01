



import { Component, OnInit } from '@angular/core'



@Component( {
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ]
} )

	
export class ProfileComponent implements OnInit {

	title: string = 'Profile'
	account: boolean = false


	constructor( ) {  }


	ngOnInit( ) {  }

}


