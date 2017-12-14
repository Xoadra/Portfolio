



import { Component, Input } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'



@Component( {
	selector: 'theme',
	templateUrl: './theme.component.html',
	styleUrls: [ './theme.component.css' ],
	animations: [
		trigger( 'viewSeries', [
			state( 'open', style( {  } ) ),
			/* state( '', style( {  } ) ), */
			/* transition( 'void => *', [ animate( '200ms ease-out' ) ] ), */
			/* transition( '* => void', [ animate( '200ms ease-out' ) ] ), */
			/* transition( 'void => *', [ animate( 200, style( { opacity: '0' } ) ) ] ), */
			/* transition( '* => void', [ animate( 200, style( { opacity: '0' } ) ) ] ), */
			/* transition( 'one <=> void', [ animate( 200 ) ] ), */
			transition( ':enter', [
				style( { opacity: '0' } ),
				animate( 200 )
			] ),
			transition( ':leave', [
				animate( 150, style( { opacity: '0' } ) ) 
			] ),
		] )
	]
} )


export class ThemeComponent {
	
	private open: string = 'void'
	private view: boolean = false
	private subject: string


	constructor( ) {  }
	
	
	selectSubject( subject: string ) {
		this.subject = subject
		this.changeState( )
	}
	
	changeState( ) {
		this.open = this.open === 'view' ? 'void' : 'view'
		this.view = this.view === true ? false : true
	}

}


