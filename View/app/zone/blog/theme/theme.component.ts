



import { Component, Input } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'



@Component( {
	selector: 'theme',
	templateUrl: './theme.component.html',
	styleUrls: [ './theme.component.css' ],
	animations: [
		trigger( 'viewSeries', [
			state( 'view', style( {  } ) ),
			/* state( '', style( {  } ) ), */
			/* transition( 'void => *', [ animate( '200ms ease-out' ) ] ), */
			/* transition( '* => void', [ animate( '200ms ease-out' ) ] ), */
			/* transition( 'void => *', [ animate( 200, style( { opacity: '0' } ) ) ] ), */
			/* transition( '* => void', [ animate( 200, style( { opacity: '0' } ) ) ] ), */
			/* transition( 'one <=> void', [ animate( 200 ) ] ), */
			transition( ':enter', [
				style( { opacity: '0' } ),
				animate( 250 )
			] ),
			transition( ':leave', [
				animate( 250, style( { opacity: '0' } ) ) 
			] ),
		] )
	]
} )


export class ThemeComponent {
	
	private view: string = 'void'
	private subject: boolean = false
	
	// Placeholder component activation triggers
	/* industry: boolean = false
	coding: boolean = false
	events: boolean = false
	startup: boolean = false
	hiring: boolean = false
	production: boolean = false
	future: boolean = false */


	constructor( ) {  }
	
	
	changeState( ) {
		this.subject = this.subject === true ? false : true
		this.view = this.view === 'view' ? 'void' : 'view'
	}
	
	// Temporary component state changer
	/* triggerSubject( subject: boolean ) {
		if ( this.industry === false ) {
			this.industry = true
		}
		else {
			this.industry = false
		}
	} */

}



