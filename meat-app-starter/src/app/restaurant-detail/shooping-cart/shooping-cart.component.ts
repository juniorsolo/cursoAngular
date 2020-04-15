import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { ShoopingCartService } from './shooping-cart.service';
import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset:0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset:0.8}),
        style({opacity: 1, transform: 'translateX(0px)', offset:1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0px)', offset:0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset:0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset:1})
      ])))
    ])
  ]
})
export class ShoopingCartComponent implements OnInit {

  constructor(private shoopingCartService: ShoopingCartService) { }

  rowState= 'ready'

  ngOnInit() {
  }

  items(): any[]{
    return this.shoopingCartService.items;
  }

  total(): number{
    return this.shoopingCartService.total()
  }

  clear(){
    console.log('limpando carrinho')
    this.shoopingCartService.clear();
  }

  removeItem(item: any){
    this.shoopingCartService.removeItem(item)
  
  }

  addItem(item : any){
    this.shoopingCartService.addItem(item)
  }

}
