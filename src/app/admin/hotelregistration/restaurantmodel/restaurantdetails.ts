import { Address } from './address';

export class RestaurantDetails {
		
	public restaurantName: string;
	
	public registrationNumber:string ;
	
	public phone: number ;
	
  public website : string ;
    
  public address:Address;

  get RestaurantName(): string{
		return this.restaurantName;
	}

	set RestaurantName(restaurantName:string){
		 this.restaurantName=restaurantName;
  }
  

  get RegistrationNumber(): string{
		return this.registrationNumber;
	}

	set RegistrationNumber(registrationNumber:string){
		 this.registrationNumber=registrationNumber;
  }
  

  get Phone(): number{
		return this.phone;
	}

	set Phone(phone:number){
		 this.phone=phone;
  }
  
  get Website(): string{
		return this.website;
	}

	set Website(website:string){
		 this.website=website;
  }
  

  get Address(): Address{
		return this.address;
	}

	set Address(address:Address){
		 this.address=address;
	}

  }
  

