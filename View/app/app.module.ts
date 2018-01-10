



// Main native modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Page routing module
import { RouteModule } from './cent/route/route.module'


// Whole-website components
import { AppComponent } from './app.component'
import { LogoComponent } from './cent/logo/logo.component'
import { RouteComponent } from './cent/route/route.component'
import { MoveComponent } from './cent/move/move.component'
import { FootComponent } from './cent/foot/foot.component'


// Services used
import { UrlService } from './relay/url.service'
import { WatchService } from './relay/watch.service'



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
		UrlService,
		WatchService
	],
	bootstrap: [
		AppComponent
	]
} )
	
	
export class AppModule {  }



