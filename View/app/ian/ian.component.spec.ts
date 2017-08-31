



import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IanComponent } from './ian.component';



describe( 'IanComponent', ( ) => {
	let component: IanComponent;
	let fixture: ComponentFixture<IanComponent>;

	beforeEach( async( ( ) => {
		TestBed.configureTestingModule( {
			declarations: [ IanComponent ]
		} )
		.compileComponents( );
	} ) );

	beforeEach( ( ) => {
		fixture = TestBed.createComponent( IanComponent );
		component = fixture.componentInstance;
		fixture.detectChanges( );
	} );

	it( 'should be created', ( ) => {
		expect( component ).toBeTruthy( );
	} );
} );



