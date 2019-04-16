import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LetterIconComponent} from './letter-icon/letter-icon.component';

@NgModule({
	declarations: [LetterIconComponent],
	exports: [
		LetterIconComponent
	],
	imports: [
		CommonModule
	]
})
export class NgSanLetterIconModule {
}
