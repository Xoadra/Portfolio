



import { animate, style, transition, trigger } from '@angular/animations'



export const FallAnimation = trigger( 'fallThrough', [
	transition( ':enter', [
		style( { transform: 'translate( 0, -200% )' } ),
		animate( '1000ms 500ms cubic-bezier( 0, 0, 0.05, 1 )' )
	] ),
	transition( ':leave', [
		animate( '1000ms 0ms cubic-bezier( 1, 0.1, 0.5, 1 )', style( { transform: 'translate( 0, 250% )' } ) )
	] ),
] )


