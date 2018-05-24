import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { FinalRestaurentSetup } from './restaurantmodel/finalrestaurentsetup';

@Injectable()
export class RestaurentSetupService {

  public finalRestaurentSetup = new ReplaySubject<FinalRestaurentSetup>(1);
 
  constructor() { }

  
getFinalRestaurentSetup() {
    return  this.finalRestaurentSetup.asObservable();
}

  public changeFinalRestaurentSetup(finalRestaurentSetup: FinalRestaurentSetup) {
    this.finalRestaurentSetup.next(finalRestaurentSetup)
  }
}