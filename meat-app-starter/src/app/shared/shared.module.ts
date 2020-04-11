import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/*
  Módulo responsável por compartilhar os componentes da pasta shared, 
  não havendo necessidade de importar FormsModule e ReactiveFormsModule 
  no módulo usar, que nesse caso é o módulo principal.
*/
@NgModule({
    declarations:[InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent,
              RatingComponent, CommonModule,
              FormsModule, ReactiveFormsModule]
})
export class SharedModule{}