import { NgModule } from "@angular/core";
import { ShoopingCartService } from "app/restaurant-detail/shooping-cart/shooping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";

/**
 * Classe não mais utilizada, apenas como exemplo.
 * 
 * Era utilizada para declarar os providers para serem importando 
 * no app.module. Os serviços nos providers foram migrados para shared.module
 * 
 */
@NgModule({
    providers: [ShoopingCartService, RestaurantsService, OrderService]
})
export class CoreModule{}