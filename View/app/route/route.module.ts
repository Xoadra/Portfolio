



import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routed page components
import { HackComponent } from '../hack/hack.component';
	import { ChallengeComponent } from '../hack/challenge/challenge.component';
	import { HistoryComponent } from '../hack/history/history.component';
	import { IssueComponent } from '../hack/issue/issue.component';
import { IanComponent } from '../ian/ian.component';
	import { AboutComponent } from '../ian/about/about.component';
	import { SkillComponent } from '../ian/skill/skill.component';
	import { ExpComponent } from '../ian/exp/exp.component';
	import { DevComponent } from '../ian/dev/dev.component';
	import { ProjectComponent } from '../ian/project/project.component';
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
	{ path: '**', component: IanComponent, children: [ ] }
];


@NgModule( {
	declarations: [
		IanComponent, AboutComponent, SkillComponent, ExpComponent, DevComponent, ProjectComponent, 
		BlogComponent,
		HackComponent, ChallengeComponent, HistoryComponent, IssueComponent, 
		TechComponent,
	],
	imports: [ CommonModule, RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )

	
export class RouteModule {  }


