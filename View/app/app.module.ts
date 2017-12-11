



// Main native modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Page routing module
import { RouteModule } from './whole/route/route.module'


// Whole-website components
import { AppComponent } from './app.component'
import { LogoComponent } from './whole/logo/logo.component'
import { RouteComponent } from './whole/route/route.component'
import { MoveComponent } from './whole/move/move.component'
import { FootComponent } from './whole/foot/foot.component'


// Services used
import { UrlService } from './transit/url.service'



@NgModule( {
	declarations: [
		AppComponent,
		LogoComponent,
		RouteComponent,
		MoveComponent,
		FootComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		RouteModule
	],
	exports: [ ],
	providers: [
		UrlService
	],
	bootstrap: [
		AppComponent
	]
} )
	
	
export class AppModule {  }



