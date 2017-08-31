



import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Routes, RouterModule } from '@angular/router';

// 'HackComponent' page's component sections
import { ChallengeComponent } from '../hack/challenge/challenge.component';
import { HistoryComponent } from '../hack/history/history.component';
import { IssueComponent } from '../hack/issue/issue.component';



@Component( {
	selector: 'hack',
	templateUrl: './hack.component.html',
	styleUrls: [ './hack.component.css' ]
} )

	
export class HackComponent implements OnInit {

	label: string = 'Up Your Hackery'

	constructor( ) {  }

	ngOnInit( ) {  }

}


