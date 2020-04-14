import { CartItem } from "./cart-item.model";
import { Menuitem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";


@Injectable()
export class ShoopingCartService {
    items: CartItem[] = []

    constructor(private notificationService : NotificationService){}

    clear(){
        this.items = []
    }

    addItem(item : Menuitem) {
        //verifica se o item já está na lista
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        //console.log('found item: ' + foundItem)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.items.push(new CartItem(item))
        }
        console.log('adicionado')
        this.notificationService.notify(`Você adicionou o item ${item.name}`);
    }
    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1
    }

    decreaseQty(item : CartItem){
        item.quantity = item.quantity - 1
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }
    removeItem(item : CartItem){
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total(): number {  
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
        
    }
}