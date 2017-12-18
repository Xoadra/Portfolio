



import { trigger, transition, style, animate } from '@angular/animations'



export const FadeAnimation = trigger( 'darkenFade', [
	transition( ':enter', [
		style( { opacity: '0' } ),
		animate( '500ms ease-out' )
	] ),
	transition( ':leave', [
		animate( '500ms 750ms ease-in', style( { opacity: '0' } ) )
	] ),
] )


