import { CartItem } from "./CartItem";

export class ShoppingCart {
  public items: CartItem[] = new Array<CartItem>();
  public grossTotal: number = 0;
  public itemsTotal: number = 0;

  public updateFrom(src: ShoppingCart) {
    this.items = src.items;
    this.grossTotal = src.grossTotal;
    this.itemsTotal = src.itemsTotal;
  }
}
