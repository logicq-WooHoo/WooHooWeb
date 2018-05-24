import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { hotelRegistrationrouting,hotelRegistrationRoutingProviders } from './hotelregistration.routing';
import { HotelregistrationComponent } from './hotelregistration.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { RestaurentDetailsComponent } from './restaurent-details/restaurent-details.component';
import { SetupRestaurentComponent } from './setup-restaurent/setup-restaurent.component';
import { RestaurentMenuComponent } from './restaurent-menu/restaurent-menu.component';
import { OpenRestaurentComponent } from './open-restaurent/open-restaurent.component';
import { RestaurentSetupService } from './restaurentsetupservice';



@NgModule({
  declarations: [
    HotelregistrationComponent,
    PersonalDetailComponent,
    RestaurentDetailsComponent,
    SetupRestaurentComponent,
    RestaurentMenuComponent,
    OpenRestaurentComponent
  ],
  imports: [  AgmCoreModule.forRoot({
    apiKey: "AIzaSyBG30O7cDCM-fKwisQ3OvwYMk-3lQo1pys",
    libraries: ["places"]
  }),
    FormsModule,
    CommonModule,
    hotelRegistrationrouting
  ],
  providers: [hotelRegistrationRoutingProviders,RestaurentSetupService],
  bootstrap: [HotelregistrationComponent]
})
export class HotelRegistrationModule { }


