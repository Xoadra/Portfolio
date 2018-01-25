



import { Component, OnInit } from '@angular/core'

import { UrlService } from '../../relay/url.service'



@Component( {
	selector: 'blog',
	templateUrl: './blog.component.html'
} )

	
export class BlogComponent implements OnInit {

	private title: string = 'Technology: Now & Ahead'


	constructor( private _url: UrlService ) {  }
	
	
	ngOnInit( ) {
		if ( this._url.viewUrl( ) === '/blog' ) {
			this._url.setTitle( 'Xambda | ' + this.title )
		}
	}

}


