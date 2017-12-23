



import { Component, Input } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'



@Component( {
	selector: 'volume',
	templateUrl: './volume.component.html',
	styleUrls: [ './volume.component.css' ],
	animations: [
		trigger( 'codeScroll', [
			state( 'hide', style( {  } ) ),
			state( 'scroll', style( {
				zIndex: '30',
				height: '36em',
				transform: 'scale( 1.05, 1 )'
			} ) ),
			transition( 'hide => scroll', [
				style( { zIndex: '30' } ),
				animate( 400, style( { zIndex: '30', height: '36em', transform: 'scale( 1.05, 1 )' } ) )
			] ),
			transition( 'scroll => hide', [
				style( { zIndex: '30' } ),
				animate( 250, style( { height: '6em', transform: 'scale( 1, 1 )' } ) )
			] )
		] )
	]
} )


export class VolumeComponent {
	
	@Input( ) field
	
	
	volume: string = 'hide'
	form: string = 'Roll'
	insight: boolean = false
	
	
	rollScroll( ) {
		this.volume = this.volume === 'scroll' ? 'hide' : 'scroll'
		this.form = this.form === 'Wrap' ? 'Roll' : 'Wrap'
		if ( this.volume === 'scroll' ) {
			this.insight = true
		}
		else {
			setTimeout( temporal => {
				this.insight =  false
			}, 500 )
		}
	}
	
}



