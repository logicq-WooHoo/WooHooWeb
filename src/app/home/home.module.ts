//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LandingService } from './landing/landing.service';
import { LoginserviceService } from './login/loginservice.service';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
 
//Material Components
import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatMenuModule, MatFormFieldModule, MatSelectModule
  , MatToolbarModule, MatGridListModule, MatIconModule, MatCardModule
} from '@angular/material';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request,HttpModule} from '@angular/http';
import { routing, homeRoutingProviders } from './home.routing';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { BasicSearchComponent } from './basic-search/basic-search.component';
import { EntityTypeComponent } from './entity/entity.component';
import { EntitySearchComponent } from './entitysearch/entitysearch.component';
// import { LocationComponent } from './location/location.component';
// import { LocationService } from './location/location.service';
import { HotelmenuComponent } from './hotelmenu/hotelmenu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {BasicSearchService} from './basic-search/basicsearch.service';
import {ShoppingCartService} from './shopping-cart/shopping-cart-service';
import {HotelmenuService} from './hotelmenu/hotelmenu.service';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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
    HomeComponent,

    LoginComponent,
    
    BasicSearchComponent,
    EntitySearchComponent,
    EntityTypeComponent,
    HotelmenuComponent,
    ShoppingCartComponent
    //EntitySearchComponent,
    //LocationComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBG30O7cDCM-fKwisQ3OvwYMk-3lQo1pys",
      libraries: ["places"]
    }),
    CommonModule,
    BsDropdownModule.forRoot(),
    SocialLoginModule.initialize(config),
    MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatMenuModule, MatFormFieldModule, MatSelectModule,
    MatToolbarModule, MatCardModule,
    MatStepperModule, FormsModule, ReactiveFormsModule, MatGridListModule, MatIconModule,
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
  providers: [homeRoutingProviders,TranslateModule, 
    /*LocationService*/],
  bootstrap: [HomeComponent]
})
export class HomeModule { }

