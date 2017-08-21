



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Modules added per guide being followed
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule( {
	declarations: [ AppComponent ],
	imports: [ BrowserModule, FormsModule, HttpModule ],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )
	
	
export class AppModule { }


