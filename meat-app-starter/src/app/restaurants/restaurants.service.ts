import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app-error-hadler";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { Menuitem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService{
    constructor(private http: HttpClient){}

    restaurants(search?: string): Observable<Restaurant[]>{
        let params: HttpParams = undefined
        if(search){
            //Objeto imutável, tem q informar os parametros no momento da construção.
            params = new HttpParams().set('q', search) 
        }
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`,{params: params})
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    reviewsOfRestaurants(id: string) : Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurants(id: string) : Observable<Menuitem[]>{
        return this.http.get<Menuitem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}