



import { Component } from '@angular/core'



@Component( {
	selector: 'subject',
	templateUrl: './subject.component.html',
	styleUrls: [ './subject.component.css' ]
} )


export class SubjectComponent {
	
	private subject: string
	

	constructor( ) {
		if ( this.subject === undefined ) {
			this.subject = 'Subject'
		}
		else {
			// Will test subject clicked identification here
		}
	}

}



