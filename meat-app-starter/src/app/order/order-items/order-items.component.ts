import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shooping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }
  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CartItem){
    console.log("remove:..." +  item.menuItem.id)
    this.remove.emit(item)
  }
}
