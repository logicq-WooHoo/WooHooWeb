import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FinalRestaurentSetup } from './restaurantmodel/finalrestaurentsetup';

@Injectable()
export class RestaurentSetupService {

  public finalRestaurentSetup = new BehaviorSubject<FinalRestaurentSetup>(new FinalRestaurentSetup);
  public currentfinalRestaurentSetup = this.finalRestaurentSetup.asObservable();

  constructor() { }

  public changeFinalRestaurentSetup(finalRestaurentSetup: FinalRestaurentSetup) {
    this.finalRestaurentSetup.next(finalRestaurentSetup)
  }
}