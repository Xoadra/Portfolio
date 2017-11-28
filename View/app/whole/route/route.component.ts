



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component( {
	selector: 'route',
	templateUrl: './route.component.html',
	styleUrls: [ './route.component.css' ]
} )


export class RouteComponent implements OnInit {

	location: string
	friend: boolean = false
	

	constructor( private route: Router ) {  }
	

	login( ) {
		this.location = this.route.url
		this.friend = true // Temporary Switch Between Guest and User Panels
		console.log( this.location )
	}

	logout( ) {
		this.friend = false // Temporary Switch Between Guest and User Panels
	}

	
	ngOnInit( ) {  }

}


