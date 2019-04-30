# NgSanLetterIcon

[![Maintainability](https://api.codeclimate.com/v1/badges/c209dc296a6811a6327c/maintainability)](https://codeclimate.com/github/reiosantos/ng-san-letter-icon/maintainability)
[![Build Status](https://travis-ci.com/reiosantos/ng-san-letter-icon.svg?branch=master)](https://travis-ci.com/reiosantos/ng-san-letter-icon)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c209dc296a6811a6327c/test_coverage)](https://codeclimate.com/github/reiosantos/ng-san-letter-icon/test_coverage)

Generates generic, single-letter icons styled according to the [Material Design](https://www.google.com/design/spec/material-design/introduction.html) colors and guidelines, similar to Gmail's fallback sender icons, using:

* [Roboto Light](https://www.google.com/fonts/specimen/Roboto) - to display the letters using the official Material Design typeface
* [material-colors](https://www.npmjs.com/package/material-colors) - to provide a Material Design colored background for the icons

## Demo
<img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/A.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/H.png" width="125" /><img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/L.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/M.png" width="125" /> <img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/R.png" width="125" /><img src="https://raw.github.com/eladnava/material-letter-icons/master/dist/png/X.png" width="125" />

## Usage

This assumes you already have an angular project setup

* Run the following commands to setup NgSanLetterIcon:

```shell
npm install -S ng-san-letter-icon
```

Add the ```NgSanLetterIconModule``` to your module ie. AppModule

```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgSanLetterIconModule} from 'ng-san-letter-icon';

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
```

Use the ```san-letter-icon``` in your components

```angular2html
<san-letter-icon
	[words]="'Some Name'"
	[backgroundColor]="'#444444'"
	[numberOfCharactersPerWord]="2">
</san-letter-icon>
```

#### Options:
* **words**
	> This is a string of words from which letters will be extracted

* **backgroundColor** Optional
	> Background Color of the icon
	- Defaults to ```#a100ff```
	
* **color** Optional
	> Color of the letter icon
	- Defaults to ```#ffffff```

* **numberOfCharactersPerWord**
	- This takes in the number of characters to extract from each word.
	- it defaults to 1 character. It can only take in either of the two values ```1 or 2```
	- If the number of words are more that 1, it will take the default value ```1```.

* **wordIndex** Optional
	> Specify a word you want to extract characters form in case its a string of more than one 
	word
	
* **characterPosition**
	> The position in the word from where to start character extraction, It defaults to 
	position/index 0, the first character
	
* **strokeWidth**
	> The border width of the circle, defaults to null
	
* **strokeColor**
	> The border color, defaults to null

## License
Apache 2.0
