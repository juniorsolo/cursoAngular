import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShoopingCartService } from "app/restaurant-detail/shooping-cart/shooping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

/*
  Módulo responsável por compartilhar os componentes da pasta shared, 
  não havendo necessidade de importar FormsModule e ReactiveFormsModule 
  no módulo app.module.ts.
    Usada também para compartilhar providers, que podem ou não serem
    importados por quem
*/
@NgModule({
    declarations:[InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent,SnackbarComponent,
              RatingComponent, CommonModule,
              FormsModule, ReactiveFormsModule]
})
export class SharedModule{

  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [ShoopingCartService, RestaurantsService, OrderService]
    }
  }

}