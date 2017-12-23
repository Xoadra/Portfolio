



import { Component } from '@angular/core'



@Component( {
	selector: 'library',
	templateUrl: './library.component.html',
	styleUrls: [ './library.component.css' ]
} )

	
export class LibraryComponent {
	
	fields: Array<string> = [ 'Programming', 'Internet', 'Languages', 'Databases', 'Algorithms', 'Frameworks' ]
	
}



