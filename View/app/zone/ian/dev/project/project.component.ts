



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'



@Component( {
	selector: 'project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.css' ]
} )

	
export class ProjectComponent implements OnInit {
	
	title: string = 'A Software App!' // Overriden By Parent Page's Title


	constructor( private _back: Router ) {  }
	
	
	back( ) {
		this._back.navigate( [ '/' ] )
	}


	ngOnInit( ) {  }

}



