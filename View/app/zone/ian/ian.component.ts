



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component( {
	selector: 'ian',
	templateUrl: './ian.component.html'
} )


export class IanComponent implements OnInit {

	title: string = 'Ian Peterson\'s Tech Platform'
	quotes: string[ ] = [ ]


	constructor( private _httpService: HttpClient ) {  }

	
	ngOnInit( ) {
		/* this._httpService.get( 'prime' ).subscribe( phrases => {
			this.quotes = phrases.json( ) as string[ ];
		} ) */
	}

}


