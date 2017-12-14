



import { Component, Input, Output, EventEmitter } from '@angular/core'



@Component( {
	selector: 'subject',
	templateUrl: './subject.component.html',
	styleUrls: [ './subject.component.css' ]
} )


export class SubjectComponent {
	
	@Input( ) subject: string
	@Output( ) delete = new EventEmitter( )
	
	
	constructor( ) {  }
	
	
	goBack( ) {
		this.delete.emit( )
	}

}


