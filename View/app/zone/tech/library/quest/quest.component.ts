



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'



@Component( {
	selector: 'quest',
	templateUrl: './quest.component.html',
	styleUrls: [ './quest.component.css' ]
} )

	
export class QuestComponent implements OnInit {

	title: string = 'What Do You Want To Learn?' // Overriden By Parent Page's Title


	constructor( private _back: Router ) {  }
	
	
	back( ) {
		this._back.navigate( [ '/tech' ] )
	}


	ngOnInit( ) {  }

}



