import { CartItem } from "./cart-item.model";
import { Menuitem } from "../menu-item/menu-item.model";

export class ShoopingCartService {
    items: CartItem[] = []

    clear(){
        this.items = []
    }

    addItem(item : Menuitem) {
        //verifica se o item já está na lista
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        //console.log('found item: ' + foundItem)
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        }else{
            this.items.push(new CartItem(item))
        }
        console.log('adicionado')
    }

    removeItem(item : CartItem){

        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.menuItem.id)
       
        if(foundItem && foundItem.quantity > 1){
            foundItem.quantity = foundItem.quantity - 1
        }else{
            this.items.splice(this.items.indexOf(item), 1)
        }
    }

    total(): number {  
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
        
    }
}