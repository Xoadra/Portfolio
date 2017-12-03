



import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'



@Component( {
	selector: 'ask',
	templateUrl: './ask.component.html',
	styleUrls: [ './ask.component.css' ]
} )

	
export class AskComponent implements OnInit {

	title: string = 'What Do You Want To Learn?' // Overriden By Parent Page's Title


	constructor( private _back: Router ) {  }
	
	
	back( ) {
		this._back.navigate( [ '/tech' ] )
	}


	ngOnInit( ) {  }

}



