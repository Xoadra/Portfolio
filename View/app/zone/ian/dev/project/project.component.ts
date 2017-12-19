



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { ShadeAnimation } from '../../../../act/shade.animation'



@Component( {
	selector: 'project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.css' ],
	animations: [ ShadeAnimation ]
} )

	
export class ProjectComponent implements OnInit {
	
	private title: string = 'A Software App!'
	private shade: boolean = true
	private before: string


	constructor( private _title: Title, private _back: Router ) {  }


	ngOnInit( ) {
		this.before = this._title.getTitle( )
		this._title.setTitle( 'Xambda | ' + this.title )
	}
	
	back( ) {
		this.shade = false
		setTimeout( temporal => {
			this._back.navigate( [ '/' ] )
			this._title.setTitle( this.before )
		}, 1000 )
	}

}



