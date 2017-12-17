



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'

import { FadeAnimation } from '../../../../act/fade.animation'



@Component( {
	selector: 'quest',
	templateUrl: './quest.component.html',
	styleUrls: [ './quest.component.css' ],
	animations: [ FadeAnimation ]
} )


export class QuestComponent implements OnInit {

	private title: string = 'What Do You Want To Learn?'
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
			this._back.navigate( [ '/tech' ] )
			this._title.setTitle( this.before )
		}, 1000 )
	}

}



