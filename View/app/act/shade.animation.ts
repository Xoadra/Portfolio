



import { animate, style, transition, trigger } from '@angular/animations'



export const ShadeAnimation = trigger( 'darkenShade', [
	transition( ':enter', [
		style( { opacity: '0' } ),
		animate( '500ms ease-out' )
	] ),
	transition( ':leave', [
		animate( '500ms 750ms ease-in', style( { opacity: '0' } ) )
	] ),
] )


