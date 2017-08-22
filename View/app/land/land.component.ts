



import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'



@Component( {
	selector: 'land',
	templateUrl: './land.component.html',
	styleUrls: [ './land.component.css' ]
} )

	
export class LandComponent implements OnInit {

	label: string = 'Ian Peterson\'s Tech Platform'
	welcome: string[ ] = [ ]

	constructor( private _httpService: Http ) {  }

	ngOnInit( ) {
		this._httpService.get( 'zone' ).subscribe( phrases => {
			this.welcome = phrases.json( ) as string[ ];
		} )
	}

}



