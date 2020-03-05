import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menuitem } from './menu-item.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: Menuitem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
     this.add.emit(this.menuItem)
  }
}
