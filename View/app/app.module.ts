



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

// Modules added per guide being followed
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component pages being routed
import { HackComponent } from './hack/hack.component';
import { IanComponent } from './ian/ian.component';
import { BlogComponent } from './blog/blog.component';
import { TechComponent } from './tech/tech.component';



// Routing directives of each page
const routes: Routes = [
	{ path: '', pathMatch: 'full', component: IanComponent, children: [ ] },
	{ path: 'blog', pathMatch: 'full', component: BlogComponent, children: [ ] },
	{ path: 'hack', pathMatch: 'full', component: HackComponent, children: [ ] },
	{ path: 'tech', pathMatch: 'full', component: TechComponent, children: [ ] },
	//{ path: '', pathMatch: 'full', component: , children: [ ] },
	//{ path: '', pathMatch: 'full', component: , children: [ ] }
];

@NgModule( {
	declarations: [ AppComponent, HackComponent, IanComponent, BlogComponent, TechComponent ],
	imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )
	
	
export class AppModule { }


