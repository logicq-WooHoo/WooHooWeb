import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent }    from './personal/personal.component';
import { RestruantComponent }        from './resturant/resturant.component';
import { SetupResturantComponent }     from './setupresturant/setupresturant.component';
import { ResturantMenusComponent }      from './resturantmenus/resturantmenus.component';
import { OpenresturantComponent }      from './openresturant/openresturant.component';

import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';


export const appRoutes: Routes = [
    // 1st Route
    { path: 'personal',  component: PersonalComponent },
    // 2nd Route
    { path: 'resturant',  component: RestruantComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'setupresturant',  component: SetupResturantComponent, canActivate: [WorkflowGuard] },
    // 4th Route
    { path: 'resturantmenus',  component: ResturantMenusComponent, canActivate: [WorkflowGuard] },
    // 5th Route
	{ path: 'openresturant',  component: OpenresturantComponent, canActivate: [WorkflowGuard] },
	 // 6th Route
    { path: '',   redirectTo: '/personal', pathMatch: 'full' },
    // 7th Route
    { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}