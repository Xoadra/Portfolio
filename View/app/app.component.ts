



import { Component } from '@angular/core'



@Component( {
	selector: 'root',
	templateUrl: './app.component.html'
} )

	
export class AppComponent {

	login: boolean = false


	// Placeholder Methods for Non-Routed Modals
	openLogin( login ) {
		this.login = login
	}

	closeLogin( close ) {
		this.login = close
	}

}


