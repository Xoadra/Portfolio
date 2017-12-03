



import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { RouteModule } from './whole/route/route.module'

// Modules added per guide being followed
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


// Whole-website components across all pages
import { LogoComponent } from './whole/logo/logo.component'
import { RouteComponent } from './whole/route/route.component'
import { MoveComponent } from './whole/move/move.component'
import { FootComponent } from './whole/foot/foot.component'


// Services used
import { UrlService } from './transit/url.service';



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
		FormsModule,
		HttpClientModule,
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


