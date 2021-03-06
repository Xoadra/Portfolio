



// General built-in modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
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
		import { ExploreComponent } from '../../zone/blog/theme/explore/explore.component'
	import { NewComponent } from '../../zone/blog/new/new.component'
	import { ForumComponent } from '../../zone/blog/forum/forum.component'
	import { PostComponent } from '../../zone/blog/post/post.component'
		import { StreamComponent } from '../../zone/blog/post/stream/stream.component'
			import { IdentityComponent } from '../../zone/blog/post/stream/identity/identity.component'
			import { CommentComponent } from '../../zone/blog/post/stream/comment/comment.component'
				import { ReplyComponent } from '../../zone/blog/post/stream/comment/reply/reply.component'
// Tech page components
import { TechComponent } from '../../zone/tech/tech.component'
	import { LibraryComponent } from '../../zone/tech/library/library.component'
		import { InquiryComponent } from '../../zone/tech/library/inquiry/inquiry.component'
		import { VolumeComponent } from '../../zone/tech/library/volume/volume.component'
	import { QuestComponent } from '../../zone/tech/quest/quest.component'
	import { GuideComponent } from '../../zone/tech/guide/guide.component'
		import { LessonComponent } from '../../zone/tech/guide/lesson/lesson.component'
			import { CodeComponent } from '../../zone/tech/guide/lesson/code/code.component'
// Hack page components
import { HackComponent } from '../../zone/hack/hack.component'
	import { ChallengeComponent } from '../../zone/hack/challenge/challenge.component'
	import { ArchiveComponent } from '../../zone/hack/archive/archive.component'
	import { IssueComponent } from '../../zone/hack/issue/issue.component'

// Partial popup components
import { JoinComponent } from '../../pop/join/join.component'
import { ProfileComponent } from '../../pop/profile/profile.component'
import { LoginComponent } from '../../pop/login/login.component'
import { MailComponent } from '../../pop/mail/mail.component'
import { ResumeComponent } from '../../pop/resume/resume.component'
// UserComponent



// Routing directives of each page
const routes: Routes = [
	{ path: '', component: IanComponent, children: [
		{ path: 'project', component: ProjectComponent } // Temporary Route Url
		//{ path: ':id', component: ProjectComponent }
	] },
	{ path: 'blog', pathMatch: 'full', component: BlogComponent, children: [ ] },
	{ path: 'tech', component: TechComponent, children: [
		{ path: 'inquire', component: InquiryComponent }
	] },
	//{ path: 'work', pathMatch: 'full', component: WorkComponent, children: [ ] },
	//{ path: 'hack', pathMatch: 'full', component: HackComponent, children: [ ] },
	{ path: 'mail', component: MailComponent },
	{ path: 'resume', component: ResumeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'join', component: JoinComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: '**', component: IanComponent }
]


@NgModule( {
	declarations: [
		// Route declarations
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
				ExploreComponent,
			NewComponent,
			ForumComponent,
			PostComponent,
				StreamComponent,
					IdentityComponent,
					CommentComponent,
						ReplyComponent,
		TechComponent,
			LibraryComponent,
				InquiryComponent,
				VolumeComponent,
			QuestComponent,
			GuideComponent,
				LessonComponent,
					CodeComponent,
		//WorkComponent,
		//HackComponent,
			//ChallengeComponent,
			//ArchiveComponent,
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



