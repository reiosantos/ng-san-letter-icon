import {Component, Input} from '@angular/core';

@Component({
	selector: 'san-letter-icon',
	templateUrl: './letter-icon.component.html',
	styleUrls: ['./letter-icon.component.scss']
})
export class LetterIconComponent {

	@Input() characterPosition: number;
	@Input() numberOfCharactersPerWord: 1 | 2 = 1;
	@Input() wordIndex: number;
	@Input() backgroundColor = '#444444';

	_words = '';

	get words() {
		let characters = '';
		let position = 0;
		let words = this._words.split(' ');
		if (words.length > 0 && this.wordIndex) {
			let index = 0;
			if (this.wordIndex < words.length) {
				index = this.wordIndex;
			}
			position = this.setPosition(words[index]);
			characters = words[index].slice(position, (position + this.numberOfCharactersPerWord));
		} else {
			let num = this.numberOfCharactersPerWord;
			words = words.slice(position, (position + this.numberOfCharactersPerWord));
			if (words.length > 1) {
				num = 1;
				words = words.slice(0, 2);
			}
			words
				.forEach((word) => {
					position = this.setPosition(word);
					characters += word.slice(position, (position + num));
					position = 0;
				});
		}
		return characters.toUpperCase();
	}

	@Input()
	set words(value) {
		this._words = value || '';
	}

	setPosition(word) {
		if (this.characterPosition && this.characterPosition < word.length) {
			return this.characterPosition;
		}
		return 0;
	}
}
