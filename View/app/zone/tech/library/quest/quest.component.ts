



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'



@Component( {
	selector: 'quest',
	templateUrl: './quest.component.html',
	styleUrls: [ './quest.component.css' ]
} )


export class QuestComponent implements OnInit {

	private title: string = 'What Do You Want To Learn?'
	private before: string


	constructor( private _title: Title, private _back: Router ) {  }


	ngOnInit( ) {
		this.before = this._title.getTitle( )
		this._title.setTitle( 'Xambda | ' + this.title )
	}
	
	back( ) {
		this._back.navigate( [ '/tech' ] )
		this._title.setTitle( this.before )
	}

}


