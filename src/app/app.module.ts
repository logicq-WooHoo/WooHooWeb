import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
 
//Material Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request,HttpModule} from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/loginservice.service';
import { ShoppingCartService } from './shared/shopping-cart-service';
import { TaxService } from './shared/tax-service';
import { PubSubService } from './shared/pub-sub.service';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("221264096256-o6c03p2dnvmssriovgm75p047652el23.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("130722581110534")
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HotelregistrationComponent,
    LoginComponent

    /*HotelSearchComponent,
    BarSearchComponent,
    ShopSearchComponent,
    EntitySearchComponent,*/
    //LocationComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBG30O7cDCM-fKwisQ3OvwYMk-3lQo1pys",
      libraries: ["places"]
    }),
    BrowserModule,
    SocialLoginModule.initialize(config),FormsModule, ReactiveFormsModule,
    HttpClientModule, HttpModule,
    CdkStepperModule,
    CommonModule,
    routing,
    HttpClientModule,
    TranslateModule.forRoot({ 
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  providers: [appRoutingProviders,TranslateModule, LoginService ,ShoppingCartService, TaxService,PubSubService/*LocationService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

