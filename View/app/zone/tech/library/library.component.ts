



import { Component } from '@angular/core'
import { animate, transition, trigger } from '@angular/animations'



@Component( {
	selector: 'library',
	templateUrl: './library.component.html',
	styleUrls: [ './library.component.css' ],
	animations: [
		trigger( 'shroudVolume', [
			transition( ':enter', [
				animate( 0 ),
			] ),
			transition( ':leave', [
				animate( 0 )
			] )
		] )
	]
} )

	
export class LibraryComponent {
	
	fields: Array<string> = [ 'Programming', 'Internet', 'Languages', 'Databases', 'Algorithms', 'Frameworks' ]
	trans: Array<boolean> = [ true, true, true ]
	
	
	shroudVolume( upper: string ) {
		if ( upper === 'Programming' ) {
			if ( !this.trans[ 0 ] ) {
				setTimeout( ( ) => {
					this.trans[ 0 ] = true
				}, 250 )
			}
			else {
				this.trans[ 0 ] = false
			}
		}
		else if ( upper === 'Languages' ) {
			if ( !this.trans[ 1 ] ) {
				setTimeout( ( ) => {
					this.trans[ 1 ] = true
				}, 250 )
			}
			else {
				this.trans[ 1 ] = false
			}
		}
		else if ( upper === 'Algorithms' ) {
			if ( !this.trans[ 2 ] ) {
				setTimeout( ( ) => {
					this.trans[ 2 ] = true
				}, 250 )
			}
			else {
				this.trans[ 2 ] = false
			}
		}
	}
	
}



