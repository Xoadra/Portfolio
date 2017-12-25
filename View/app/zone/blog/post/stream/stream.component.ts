



import { Component } from '@angular/core'



@Component( {
	selector: 'stream',
	templateUrl: './stream.component.html',
	styleUrls: [ './stream.component.css' ]
} )


export class StreamComponent {
	
	private chronos: Array<number> = [ 1, 2, 3 ]
	private offset: number = this.chronos[ this.chronos.length - 1 ] + 1
	
}


