import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LetterIconComponent} from './letter-icon.component';

describe('LetterIconComponent', () => {
	let component: LetterIconComponent;
	let fixture: ComponentFixture<LetterIconComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LetterIconComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LetterIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should return 1 character from word', () => {
		component.words = 'Santos';
		component._words = 'Santos';
		expect(component.words).toBe('S')
	});

	it('should return 2 characters from word', () => {
		component.words = 'Santos';
		component.numberOfCharactersPerWord = 2;
		expect(component.words).toBe('SA')
	});

	it('should return 2 characters from wordIndex', () => {
		component.words = 'Santos';
		component.wordIndex = 1;
		expect(component.words).toBe('S')
	});

	it('should not default to index 0 if wordIndex is greater', () => {
		component.words = 'Ken';
		component.wordIndex = 7;
		expect(component.words).toBe('K')
	});
});
