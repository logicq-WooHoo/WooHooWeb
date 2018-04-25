import { CartItem } from "./cart-item";

export class RestaurantCart {
    public restaurantName: string;
    public itemsSelected: CartItem[] = new Array<CartItem>();
    public grossTotal: number;
    public total: number;
    public restaurantId: number;
  }
  