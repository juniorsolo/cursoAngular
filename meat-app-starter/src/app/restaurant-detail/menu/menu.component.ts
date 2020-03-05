import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Menuitem } from '../menu-item/menu-item.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<Menuitem[]>

  constructor(private restaurantService : RestaurantsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
  }

}
