import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  luke = {name: 'Luke', isJedi: true, temple: 'Curuscant'}
  leia = {name: 'leia', isJedi: false}
  han = {name: 'han', isJedi: false}
  
}
