



import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Main page components
import { IanComponent } from '../../zone/ian/ian.component'
	//import { PeekComponent } from '../../zone/ian/peek/peek.component'
	//import { ExpComponent } from '../../zone/ian/exp/exp.component'
	//import { MethodComponent } from '../../zone/ian/method/method.component'
	import { BioComponent } from '../../zone/ian/bio/bio.component'
	import { SkillComponent } from '../../zone/ian/skill/skill.component'
	import { DevComponent } from '../../zone/ian/dev/dev.component'
		import { ProjectComponent } from '../../zone/ian/dev/project/project.component'
// Work page components
import { WorkComponent } from '../../zone/work/work.component'
// Blog page components
import { BlogComponent } from '../../zone/blog/blog.component'
	import { ThemeComponent } from '../../zone/blog/theme/theme.component'
		import { ReadComponent } from '../../zone/blog/theme/read/read.component'
	import { NewestComponent } from '../../zone/blog/newest/newest.component'
	import { ForumComponent } from '../../zone/blog/forum/forum.component'
	import { PostComponent } from '../../zone/blog/post/post.component'
// Tech page components
import { TechComponent } from '../../zone/tech/tech.component'
	import { LibraryComponent } from '../../zone/tech/library/library.component'
		import { AskComponent } from '../../zone/tech/library/ask/ask.component'
		import { KnowComponent } from '../../zone/tech/library/know/know.component'
	import { GuideComponent } from '../../zone/tech/guide/guide.component'
		import { LessonComponent } from '../../zone/tech/guide/lesson/lesson.component'
			import { CodeComponent } from '../../zone/tech/guide/lesson/code/code.component'
// Hack page components
import { HackComponent } from '../../zone/hack/hack.component'
	import { ChallengeComponent } from '../../zone/hack/challenge/challenge.component'
	import { HistoryComponent } from '../../zone/hack/history/history.component'
	import { IssueComponent } from '../../zone/hack/issue/issue.component'

// Partial popup components
import { JoinComponent } from '../../social/join/join.component'
import { ProfileComponent } from '../../social/profile/profile.component'
import { LoginComponent } from '../../social/login/login.component'
import { MailComponent } from '../../social/mail/mail.component';
import { ResumeComponent } from '../../social/resume/resume.component'



// Routing directives of each page
const routes: Routes = [
	{ path: '', component: IanComponent, children: [
		{ path: 'project', component: ProjectComponent }, // Temporary Route Url
		//{ path: ':id', component: ProjectComponent }
	] },
	//{ path: 'work', pathMatch: 'full', component: WorkComponent, children: [ ] },
	{ path: 'blog', pathMatch: 'full', component: BlogComponent, children: [ ] },
	//{ path: 'hack', pathMatch: 'full', component: HackComponent, children: [ ] },
	{ path: 'tech', component: TechComponent, children: [
		{ path: 'ask', component: AskComponent }
	] },
	{ path: 'mail', component: MailComponent },
	{ path: 'resume', component: ResumeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'join', component: JoinComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: '**', component: IanComponent }
]


@NgModule( {
	declarations: [
		LoginComponent,
		JoinComponent,
		ProfileComponent,
		MailComponent,
		ResumeComponent,
		IanComponent,
			//PeekComponent,
			//ExpComponent,
			//MethodComponent, 
			BioComponent,
			SkillComponent,
			DevComponent,
				ProjectComponent,
		BlogComponent,
			ThemeComponent,
				ReadComponent,
			NewestComponent,
			ForumComponent,
			PostComponent,
		TechComponent,
			LibraryComponent,
				AskComponent,
				KnowComponent,
			GuideComponent,
				LessonComponent,
					CodeComponent,
		//WorkComponent,
		//HackComponent,
			//ChallengeComponent,
			//HistoryComponent,
			//IssueComponent
	],
	imports: [
		CommonModule,
		RouterModule.forRoot( routes )
	],
	exports: [
		RouterModule
	]
} )


export class RouteModule {  }


