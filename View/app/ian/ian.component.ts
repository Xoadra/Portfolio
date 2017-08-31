



import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Routes, RouterModule } from '@angular/router';



@Component( {
	selector: 'ian',
	templateUrl: './ian.component.html'
} )

	
export class IanComponent implements OnInit {

	label: string = 'Ian Peterson\'s Tech Platform'
	welcome: string[ ] = [ ]

	constructor( private _httpService: Http ) {  }

	ngOnInit( ) {
		this._httpService.get( 'zone' ).subscribe( phrases => {
			this.welcome = phrases.json( ) as string[ ];
		} )
	}

}



