import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { FoodSearchComponent } from './food/food.component';
import { EntityTypeComponent } from './entity/entity.component';
import { EntitySearchComponent } from './entitysearch/entitysearch.component';
import { HotelmenuComponent } from './hotelmenu/hotelmenu.component';

export const homeRoutes: Routes = [
  { path: '',component: HomeComponent,
  children: [
    { path: '', loadChildren: './landing/landing.module#LandingModule'},
   // { path: 'landing', loadChildren: './landing/landing.module#LandingModule' },
    { path: 'entitySearch', component: EntitySearchComponent},
    { path: 'hotelmenu', component: HotelmenuComponent }
  ] },
  //{ path: '', component: LandingComponent },
  
  { path:  'entitytype', component :EntityTypeComponent},


  // { path:  'entitysearch', component :EntitySearchComponent}
];

export const homeRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forChild(homeRoutes);