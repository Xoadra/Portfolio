



import { Component, Input } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'



@Component( {
	selector: 'volume',
	templateUrl: './volume.component.html',
	styleUrls: [ './volume.component.css' ],
	animations: [
		trigger( 'scrollForm', [
			state( 'shroud', style( {  } ) ),
			state( 'exhibit', style( {
				height: '36em',
				transform: 'scale( 1.05, 1 )'
			} ) ),
			transition( 'shroud => exhibit', [
				style( { transform: 'scale( 1.05, 1 )' } ),
				animate( 400 )
			] ),
			transition( 'exhibit => shroud', [
				style( { transform: 'scale( 1.05, 1 )' } ),
				animate( 250, style( { height: '6em', transform: 'scale( 1.05, 1 )' } ) )
			] )
		] )
	]
} )


export class VolumeComponent {
	
	@Input( ) field
	
	
	volume: string = 'shroud'
	form: string = 'roll'
	insight: boolean = false
	
	
	rollScroll( ) {
		this.volume = this.volume === 'exhibit' ? 'shroud' : 'exhibit'
		if ( this.volume === 'exhibit' ) {
			this.insight = true
			setTimeout( temporal => {
				this.form = 'wrap'
			}, 400 )
		}
		else {
			setTimeout( temporal => {
				this.form = 'roll'
			}, 250 )
			setTimeout( temporal => {
				this.insight =  false
			}, 500 )
		}
	}
	
}



