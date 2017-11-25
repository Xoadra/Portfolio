



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouteModule } from './route/route.module';

// Modules added per guide being followed
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Whole-website components across all pages
import { LogoComponent } from './logo/logo.component';
import { RouteComponent } from './route/route.component';
import { MoveComponent } from './move/move.component';
import { FootComponent } from './foot/foot.component';

// Partial popup components accessible from anywhere
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';



@NgModule( {
	declarations: [
		AppComponent,
		AuthComponent,
		ProfileComponent,
		SignupComponent,
		LogoComponent,
		RouteComponent,
		MoveComponent,
		FootComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouteModule
	],
	exports: [ ],
	providers: [ ],
	bootstrap: [
		AppComponent
	]
} )
	
	
export class AppModule {  }


