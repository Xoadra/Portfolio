



import { Injectable } from '@angular/core'



@Injectable( )


export class WatchService {
	
	private initialDate: Date
	private recordNow: Date
	private gunShot: number
	private finishLine: number
	private elapsedTime: number
	private offsetValue: boolean
	
	
	setWatch( ) {
		this.initialDate = new Date( )
		this.gunShot = ( // Initial time snapshot
			( this.initialDate.getFullYear( ) * 10000000000000 ) +
			( this.initialDate.getMonth( ) * 100000000000 ) +
			( this.initialDate.getDate( ) * 1000000000 ) +
			( this.initialDate.getHours( ) * 10000000 ) +
			( this.initialDate.getMinutes( ) * 100000 ) +
			( this.initialDate.getSeconds( ) * 1000 ) +
			this.initialDate.getMilliseconds( )
		)
	}
	
	getElapsed( offset: number ): number {
		this.recordNow = new Date( )
		this.finishLine = ( // End time snapshot
			( this.recordNow.getFullYear( ) * 10000000000000 ) +
			( this.recordNow.getMonth( ) * 100000000000 ) +
			( this.recordNow.getDate( ) * 1000000000 ) +
			( this.recordNow.getHours( ) * 10000000 ) +
			( this.recordNow.getMinutes( ) * 100000 ) +
			( this.recordNow.getSeconds( ) * 1000 ) +
			this.recordNow.getMilliseconds( )
		)
		this.elapsedTime = this.finishLine - ( this.gunShot + offset )
		return this.elapsedTime
	}
	
	isTimeMachine( time: number ): boolean {
		if ( time < 0 ) {
			this.offsetValue = true
		}
		else {
			this.offsetValue = false
		}
		return this.offsetValue
	}
	
}



