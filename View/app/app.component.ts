



import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'



@Component( {
	selector: 'root',
	templateUrl: './app.component.html'
} )

	
export class AppComponent implements OnInit {
	
	private title: string = 'Xambda'
	
	
	constructor( private _title: Title ) {  }
	
	
	ngOnInit( ) {
		this._title.setTitle( this.title )
	}
	
}



