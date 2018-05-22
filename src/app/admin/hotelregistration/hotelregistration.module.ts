import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { hotelRegistrationrouting,hotelRegistrationRoutingProviders } from './hotelregistration.routing';
import { HotelregistrationComponent } from './hotelregistration.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { RestaurentDetailsComponent } from './restaurent-details/restaurent-details.component';
import { SetupRestaurentComponent } from './setup-restaurent/setup-restaurent.component';
import { RestaurentMenuComponent } from './restaurent-menu/restaurent-menu.component';
import { OpenRestaurentComponent } from './open-restaurent/open-restaurent.component';



@NgModule({
  declarations: [
    HotelregistrationComponent,
    PersonalDetailComponent,
    RestaurentDetailsComponent,
    SetupRestaurentComponent,
    RestaurentMenuComponent,
    OpenRestaurentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    hotelRegistrationrouting
  ],
  providers: [hotelRegistrationRoutingProviders],
  bootstrap: [HotelregistrationComponent]
})
export class HotelRegistrationModule { }


