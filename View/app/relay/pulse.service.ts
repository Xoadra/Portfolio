



import { Injectable } from '@angular/core'



@Injectable( )


export class PulseService {
	
	private pulse: boolean = false
	hover: string = 'off'
	
	
	initPulse( volume: string ) { // Use 'mouseenter' event to trigger
		if ( volume === 'exhibit' && this.hover === 'off' ) {
			this.hover = 'on'
			this.pulse = true
			console.log( this.hover )
			this.cyclePhase( volume ) // Activate the pulse cycle effect
		}
	}
	
	endPulse( ) { // Have 'mouseleave' event assigned to this
		this.hover = 'off'
		this.pulse = false
		console.log( this.hover )
	}
	
	private cyclePhase( volume: string ) {
		if ( volume === 'exhibit' && this.pulse ) {
			if ( this.hover === 'on' ) { // Start the pulse on hover
				this.hover = 'recede'
				console.log( this.hover )
				this.cyclePhase( volume ) // Loop through pulse phases
			}
			else if ( this.hover === 'grow' || this.hover === 'recede' ) { // Change pulse states
				setTimeout( temporal => {
					this.hover = this.hover === 'grow' ? 'recede' : 'grow'
					console.log( this.hover )
					this.cyclePhase( volume ) // Loop through pulse phases
				}, 2000 )
			}
		}
		else {
			this.hover = 'off'
			this.pulse = false
			console.log( this.hover )
		}
	}

}


