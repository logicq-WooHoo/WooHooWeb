import { RestaurantCart } from "./restaurant-cart";

export class ShoppingCart {
  public restaurantCart: RestaurantCart[] = new Array<RestaurantCart>();
  public grossTotal: number = 0;
  public totalNumberOfItems: number = 0;
  public itemsTotal: number = 0;

  public updateFrom(src: ShoppingCart) {
    this.restaurantCart = src.restaurantCart;
    this.grossTotal = src.grossTotal;
    this.itemsTotal = src.itemsTotal;
  }
}
