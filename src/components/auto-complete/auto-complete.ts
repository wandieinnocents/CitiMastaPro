import { Component } from '@angular/core';

/**
 * Generated class for the AutoCompleteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'auto-complete',
  templateUrl: 'auto-complete.html'
})
export class AutoCompleteComponent {

  text: string;

  constructor() {
    console.log('Hello AutoCompleteComponent Component');
    this.text = 'Hello World';
  }

}
