import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NgSanLetterIconModule} from '@san-letter-icon/ng-san-letter-icon.module';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				NgSanLetterIconModule
			]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'ng-san-letter-icon'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('ng-san-letter-icon');
	});
});
