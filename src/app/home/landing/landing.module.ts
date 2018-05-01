import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { CommonModule } from '@angular/common';
import { landingrouting,landingRoutingProviders } from './landing.routing';
import { HttpClientModule } from '@angular/common/http';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request,HttpModule} from '@angular/http';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LandingComponent } from './landing.component';
import { FoodSearchComponent } from '../food/food.component';
import{HotelSearchComponent} from '../hotel/hotel.component';
import { ShopSearchComponent } from '../shop/shop.component';
import { NightlifeSearchComponent } from '../nightlife/nightlife.component';
import { ActivitySearchComponent } from '../activites/activites.component';
import { EmergencySearchComponent } from '../emergency/emergency.component';

@NgModule({
  declarations: [
    LandingComponent,
    FoodSearchComponent,
    HotelSearchComponent,
    ShopSearchComponent,
    NightlifeSearchComponent,
    ActivitySearchComponent,
    EmergencySearchComponent
  ],
  imports: [
    FormsModule,
    landingrouting,
    CommonModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({ 
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  providers: [ TranslateModule,landingRoutingProviders ],
  bootstrap: [LandingComponent]
})

export class LandingModule { }

