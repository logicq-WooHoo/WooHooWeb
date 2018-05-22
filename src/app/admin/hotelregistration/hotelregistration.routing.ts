import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelregistrationComponent } from './hotelregistration.component';
import { SetupRestaurentComponent } from './setup-restaurent/setup-restaurent.component';
import { RestaurentMenuComponent } from './restaurent-menu/restaurent-menu.component';
import { RestaurentDetailsComponent } from './restaurent-details/restaurent-details.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { OpenRestaurentComponent } from './open-restaurent/open-restaurent.component';

export const hotelRegistrationRoutes: Routes = [
  { path:  '', component :HotelregistrationComponent,
    children: [
      { path: '', component: PersonalDetailComponent},
      { path: 'setuprestaurent', component: SetupRestaurentComponent},
      { path: 'restaurentmenu', component: RestaurentMenuComponent},
      { path: 'restaurentdetail', component: RestaurentDetailsComponent},
      { path: 'openrestaurent', component: OpenRestaurentComponent} 
  ] 
}
  
];

export const hotelRegistrationRoutingProviders: any[] = [
];

export const hotelRegistrationrouting: ModuleWithProviders = RouterModule.forChild( hotelRegistrationRoutes);