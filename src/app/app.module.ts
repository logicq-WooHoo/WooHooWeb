import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RegistrationService } from './services/registration.service';
import {LoginserviceService } from './services/loginservice.service';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Material Components
import {MatButtonModule, MatCheckboxModule, MatInputModule,MatRadioModule,MatMenuModule,MatFormFieldModule,MatSelectModule
  ,MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserRegistrationComponent} from './user_registration/user_registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatCheckboxModule, MatInputModule,MatRadioModule,MatMenuModule,MatFormFieldModule,MatSelectModule,
    MatToolbarModule,
    BrowserAnimationsModule,MatStepperModule,FormsModule,ReactiveFormsModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

