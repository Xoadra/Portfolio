



import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'



@Directive( {
	selector: '[xamFade]'
} )


export class FadeDirective {
	
	@Input( ) set xamFade( fade: boolean ) {
		if ( fade ) {
			this._view.createEmbeddedView( this._template )
		}
		else {
			setTimeout( temporal => { this._view.clear( ) }, 750 )
		}
	}
	
	
	constructor( private _template: TemplateRef<any>, private _view: ViewContainerRef ) {  }
	
}



