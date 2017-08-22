



import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'



@Component( {
	selector: 'root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
} )

	
export class AppComponent implements OnInit {

	label: string = 'Ian Peterson\'s Tech Portfolio & Blog'
	welcome: string[ ] = [ ]

	constructor( private _httpService: Http ) {  }

	ngOnInit( ) {
		this._httpService.get( 'zone' ).subscribe( phrases => {
			this.welcome = phrases.json( ) as string[ ];
		} )
	}

}



