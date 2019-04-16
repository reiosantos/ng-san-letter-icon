import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'ng-san-letter-icon';
	names = [
		'Santos', 'My Name', 'Kojjo Pato'
	];
	chars: 1 | 2 = 1;
	color = '#444444';
}
