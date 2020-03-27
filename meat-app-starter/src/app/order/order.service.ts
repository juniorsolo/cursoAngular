import { Injectable } from "@angular/core";
import { ShoopingCartService } from "app/restaurant-detail/shooping-cart/shooping-cart.service";
import { CartItem } from "app/restaurant-detail/shooping-cart/cart-item.model";

@Injectable()
export class OrderService{

    constructor(private cartService: ShoopingCartService){}

    itemsValue(): number{
        return this.cartService.total()
    }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }
    
    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

}