



import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routed page components
import { HackComponent } from '../hack/hack.component';
import { IanComponent } from '../ian/ian.component';
import { BlogComponent } from '../blog/blog.component';
import { TechComponent } from '../tech/tech.component';



// Routing directives of each page
const routes: Routes = [
	{ path: '', pathMatch: 'full', component: IanComponent, children: [ ] },
	{ path: 'blog', pathMatch: 'full', component: BlogComponent, children: [ ] },
	{ path: 'hack', pathMatch: 'full', component: HackComponent, children: [ ] },
	{ path: 'tech', pathMatch: 'full', component: TechComponent, children: [ ] },
	//{ path: '', pathMatch: 'full', component: , children: [ ] },
	//{ path: '', pathMatch: 'full', component: , children: [ ] }
	{ path: '**', component: BlogComponent, children: [ ] }
];


@NgModule( {
	declarations: [ IanComponent, BlogComponent, HackComponent, TechComponent ],
	imports: [ CommonModule, RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )

	
export class RouteModule {  }



