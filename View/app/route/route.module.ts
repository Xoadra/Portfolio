



import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Main page components
import { IanComponent } from '../ian/ian.component';
	import { PeekComponent } from '../ian/peek/peek.component';
	import { QuoteComponent } from '../ian/quote/quote.component';
	import { BioComponent } from '../ian/bio/bio.component';
	import { SkillComponent } from '../ian/skill/skill.component';
	import { ExpComponent } from '../ian/exp/exp.component';
	import { MethodComponent } from '../ian/method/method.component'
	import { DevelopComponent } from '../ian/develop/develop.component';
// Work page components
import { WorkComponent } from '../work/work.component';
// Blog page components
import { BlogComponent } from '../blog/blog.component';
	import { ThemeComponent } from '../blog/theme/theme.component';
	import { NewestComponent } from '../blog/newest/newest.component';
	import { ForumComponent } from '../blog/forum/forum.component';
// Tech page components
import { TechComponent } from '../tech/tech.component';
	import { LibraryComponent } from '../tech/library/library.component';
	import { GuideComponent } from '../tech/guide/guide.component';
	import { AskComponent } from '../tech/ask/ask.component';
// Hack page components
import { HackComponent } from '../hack/hack.component';
	import { ChallengeComponent } from '../hack/challenge/challenge.component';
	import { HistoryComponent } from '../hack/history/history.component';
	import { IssueComponent } from '../hack/issue/issue.component';



// Routing directives of each page
const routes: Routes = [
	{ path: '', pathMatch: 'full', component: IanComponent, children: [ ] },
	//{ path: 'work', pathMatch: 'full', component: WorkComponent, children: [ ] },
	{ path: 'blog', pathMatch: 'full', component: BlogComponent, children: [ ] },
	{ path: 'hack', pathMatch: 'full', component: HackComponent, children: [ ] },
	{ path: 'tech', pathMatch: 'full', component: TechComponent, children: [ ] },
	//{ path: '', pathMatch: 'full', component: , children: [ ] }
	{ path: '**', component: IanComponent, children: [ ] }
];


@NgModule( {
	declarations: [
		IanComponent,
			PeekComponent, QuoteComponent, BioComponent, SkillComponent, ExpComponent, MethodComponent, DevelopComponent,
		WorkComponent,
		BlogComponent,
			ThemeComponent, NewestComponent, ForumComponent, 
		HackComponent,
			ChallengeComponent, HistoryComponent, IssueComponent, 
		TechComponent,
			LibraryComponent, GuideComponent, AskComponent
	],
	imports: [ CommonModule, RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )

	
export class RouteModule {  }


