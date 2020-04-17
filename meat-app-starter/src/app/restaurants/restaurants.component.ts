import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations:[
    trigger('toggleSearch',[
      state('hidden', style({
        opacity:0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height":"70px",
        "margin-top":"20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = "hidden"
  restaurants : Restaurant[];

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantsService: RestaurantsService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants);

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
    .switchMap(searchTerm => 
      this.restaurantsService.restaurants(searchTerm))
      .subscribe(restaurants => this.restaurants = restaurants)
  }

  openSearchBar(){
    this.searchBarState = this.searchBarState === 'visible' ? 'hidden' : 'visible'
  }

}
