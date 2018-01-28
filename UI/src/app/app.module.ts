import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { RestruantComponent }      from './resturant/resturant.component';
import { SetupResturantComponent }   from './setupresturant/setupresturant.component';
import { ResturantMenusComponent }    from './resturantmenus/resturantmenus.component';
import { OpenresturantComponent }    from './openresturant/openresturant.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';

@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent, RestruantComponent, SetupResturantComponent, ResturantMenusComponent,OpenresturantComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}