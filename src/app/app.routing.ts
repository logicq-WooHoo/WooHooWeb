import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user_registration/user_registration.component'

export const appRoutes: Routes = [

  //{ path: '', pathMatch: 'full', component: UserRegistrationComponent },
  {
    path: '',
    component: AppComponent,
    children: [
    ]

  }

];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });