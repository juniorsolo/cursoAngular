import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { ShoopingCartService } from './shooping-cart.service';

@Component({
  selector: 'mt-shooping-cart',
  templateUrl: './shooping-cart.component.html'
})
export class ShoopingCartComponent implements OnInit {

  constructor(private shoopingCartService: ShoopingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoopingCartService.items;
  }

  total(): number{
    return this.shoopingCartService.total();
  }

}
