



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { FadeAnimation } from '../../../../act/fade.animation'



@Component( {
	selector: 'project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.css' ],
	animations: [ FadeAnimation ]
} )

	
export class ProjectComponent implements OnInit {
	
	private title: string = 'A Software App!'
	private fade: boolean = true
	private before: string


	constructor( private _title: Title, private _back: Router ) {  }


	ngOnInit( ) {
		this.before = this._title.getTitle( )
		this._title.setTitle( 'Xambda | ' + this.title )
	}
	
	back( ) {
		this.fade = false
		setTimeout( temporal => {
			this._back.navigate( [ '/' ] )
			this._title.setTitle( this.before )
		}, 1000 )
	}

}



