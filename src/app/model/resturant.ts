export class Resturant {

    constructor(
        public id: number,
        public restaurantName: string,
        public city: string,
		 public recommendationCount: number,
		  public rating: number,
          public deliveryPartners :String[],
          public restaurantTypes:String[],
          public area:string
          
    ) { }   
}
