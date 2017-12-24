



import { animate, state, style, transition, trigger } from '@angular/animations'



export const PulseAnimation = trigger( 'pulseOver', [
	state( 'on', style( { transform: 'matrix( 1.025, 0, 0, 1, 0, 0 )' } ) ),
	state( 'grow', style( { transform: 'matrix( 1.05, 0, 0, 1.025, 0, 7.5 )' } ) ),
	state( 'recede', style( { transform: 'matrix( 1.025, 0, 0, 1, 0, 0 )' } ) ),
	state( 'off', style( { transform: 'matrix( 1.025, 0, 0, 1, 0, 0 )' } ) ),
	transition( 'on => recede', [
		style( { /* transform: 'matrix( 1.05, 0, 0, 1.025, 0, 0 )'  */} ),
		animate( 0, style( { transform: 'matrix( 1.05, 0, 0, 1.025, 0, 0 )' } ) ),
	] ),
	transition( 'grow => recede', [
		style( { transform: 'matrix( 1.05, 0, 0, 1.025, 0, 7.5 )' } ),
		animate( '2s ease-in-out', style( { transform: 'matrix( 1.025, 0, 0, 1, 0, 0 )' } ) )
	] ),
	transition( 'recede => grow', [
		style( { transform: 'matrix( 1.025, 0, 0, 1, 0, 0 )' } ),
		animate( '2s ease-in-out', style( { transform: 'matrix( 1.05, 0, 0, 1.025, 0, 7.5 )' } ) )
	] ),
	transition( '* => off', [
		style( { transform: 'matrix( 1.05, 0, 0, 1.025, 0, 0 )' } ),
		animate( '2s ease-out', style( { transform: 'matrix( 1.025, 0, 0, 1, 0, 0 )' } ) )
	] )
] )



