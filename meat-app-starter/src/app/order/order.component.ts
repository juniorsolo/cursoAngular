import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shooping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm : FormGroup

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      emailConfirmation: new FormControl(''),
      address: new FormControl(''),
      number: new FormControl(''),
      optionalAddress: new FormControl(''),
      paymentOption : new FormControl('')

    })

  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)

  }
  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: Order){
    this.orderForm.value
    order.orderItems = this.cartItems().
    map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary']) // Redirecionando...
      console.log(`Compra concluída: ${orderId}`)
      //console.log(`Compra concluída: `+ JSON.stringify(orderId)) // Usado em caso de retornar um json
      this.orderService.clear()
    })
    console.log( order)
  }
}
