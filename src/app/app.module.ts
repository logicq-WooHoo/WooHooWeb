import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
 
//Material Components
import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatMenuModule, MatFormFieldModule, MatSelectModule
  , MatToolbarModule, MatGridListModule, MatIconModule, MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request,HttpModule} from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';
//import { HotelSearchComponent } from './hotel/hotel.component';
// import { BarSearchComponent } from './bar/bar.component';
// import { ShopSearchComponent } from './shop/shop.component';
// import { EntitySearchComponent } from './entitysearch/entitysearch.component';
// import { LocationComponent } from './location/location.component';
// import { LocationService } from './location/location.service';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate';

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
    SocialLoginModule.initialize(config),
    MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatMenuModule, MatFormFieldModule, MatSelectModule,
    MatToolbarModule, MatCardModule,
    BrowserAnimationsModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatGridListModule, MatIconModule,
    HttpClientModule, HttpModule,
    CdkStepperModule,
    routing,
    HttpClientModule,
    TranslateModule.forRoot({ 
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  providers: [appRoutingProviders,TranslateModule /*LocationService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

