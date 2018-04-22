export class MenuItem {
    public id: string;
    public itemName: string;
    public description: string;
    public price: number;
    public isVeg:boolean;


    public updateFrom(src: MenuItem): void {
      this.id = src.id;
      this.itemName = src.itemName;
      this.description = src.description;
      this.price = src.price;
      this.isVeg= src.isVeg; 
    }
  }