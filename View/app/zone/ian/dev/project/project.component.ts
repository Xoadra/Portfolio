



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'



@Component( {
	selector: 'project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.css' ]
} )

	
export class ProjectComponent implements OnInit {
	
	private title: string = 'A Software App!'
	private before: string


	constructor( private _title: Title, private _back: Router ) {  }


	ngOnInit( ) {
		this.before = this._title.getTitle( )
		this._title.setTitle( 'Xambda | ' + this.title )
	}
	
	back( ) {
		this._back.navigate( [ '/' ] )
		this._title.setTitle( this.before )
	}

}


