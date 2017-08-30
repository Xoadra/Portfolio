



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
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';



@NgModule( {
	declarations: [ AppComponent, LogoComponent, RouteComponent, NavComponent, FootComponent ],
	imports: [ BrowserModule, FormsModule, HttpModule, RouteModule ],
	exports: [ ],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )
	
	
export class AppModule {  }



