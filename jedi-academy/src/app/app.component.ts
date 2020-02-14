import { Component } from '@angular/core';
import { Student } from './student/Student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  students : Student[] = [
      {name: 'Luke', isJedi: true, temple: 'Curuscant'},
      {name: 'leia', isJedi: false},
      {name: 'han', isJedi: false}
  ]
  
}
