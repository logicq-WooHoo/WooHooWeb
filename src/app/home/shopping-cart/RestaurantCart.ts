import { CartItem } from "./CartItem";

export class RestaurantCartItem {
    public restaurantName: string;
    public itemsSelected: CartItem[];
    public grossTotal: number;
    public total: number;
  }
  