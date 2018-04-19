//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { OrdersComponent } from './orders/orders.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request,HttpModule} from '@angular/http';
import { routing, userRoutingProviders } from './user.routing';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    UserComponent,
    OrdersComponent
    
    //EntitySearchComponent,
    //LocationComponent
  ],
  imports: [
    
    CommonModule,
    BsDropdownModule.forRoot(),
    routing,
    HttpClientModule,
    TranslateModule.forRoot({ 
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  providers: [userRoutingProviders,TranslateModule /*LocationService*/],
  bootstrap: [UserComponent]
})
export class UserModule { }

