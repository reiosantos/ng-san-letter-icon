import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgSanLetterIconModule} from '@san-letter-icon/ng-san-letter-icon.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NgSanLetterIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
