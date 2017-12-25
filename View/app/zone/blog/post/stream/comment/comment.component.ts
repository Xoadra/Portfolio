



import { Component, Input } from '@angular/core'



@Component( {
	selector: 'comment',
	templateUrl: './comment.component.html',
	styleUrls: [ './comment.component.css' ]
} )


export class CommentComponent {
	
	@Input( ) chrono: number
	@Input( ) offset: number
	
}


