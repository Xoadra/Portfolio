



import { Component, OnInit, Input } from '@angular/core';
import { NewestComponent } from '../newest/newest.component';
import { ForumComponent } from '../forum/forum.component';



@Component( {
	selector: 'post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.css' ]
} )

	
export class PostComponent implements OnInit {

	@Input( ) section


	constructor( ) {  }

	ngOnInit( ) {  }

}


