import { CartItem } from "./cart-item";

export class RestaurantCart {
    public restaurantName: string;
    public itemsSelected: CartItem[] = new Array<CartItem>();
    public grossTotal: number;
    public total: number;
    public restaurantId: number;
    public orderMode: string;
    public cabType: string;
    public orderMessage: string = 'Your food would be delivered within 45 minutes.';
    public deliveryPartners:string[];
  }
  