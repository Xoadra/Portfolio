



import { Component, OnInit } from '@angular/core'



@Component( {
	selector: 'subject',
	templateUrl: './subject.component.html',
	styleUrls: [ './subject.component.css' ]
} )


export class SubjectComponent implements OnInit {
	
	subject: string
	

	constructor( ) {
		if ( this.subject === undefined ) {
			this.subject = 'Subject'
		}
		else {
			
		}
	}

	
	ngOnInit( ) {  }

}


