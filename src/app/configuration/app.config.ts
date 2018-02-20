import { Injectable, Inject} from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class AppConfig {

    getRestaurantCities="/api/user/restaurant/search";
    getFoodCategories="/api/getFoodCategories";

    login = "/api/login";
    getRestaurants="";
    saveUser="";
}