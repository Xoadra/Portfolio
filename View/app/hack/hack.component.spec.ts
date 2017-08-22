



import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HackComponent } from './hack.component';


describe( 'HackComponent', ( ) => {
	let component: HackComponent;
	let fixture: ComponentFixture<HackComponent>;

	beforeEach( async( ( ) => {
		TestBed.configureTestingModule( {
			declarations: [ HackComponent ]
		} )
		.compileComponents( );
	} ) );

	beforeEach( ( ) => {
		fixture = TestBed.createComponent( HackComponent );
		component = fixture.componentInstance;
		fixture.detectChanges( );
	} );

	it( 'should be created', ( ) => {
		expect( component ).toBeTruthy( );
	} );
} );


