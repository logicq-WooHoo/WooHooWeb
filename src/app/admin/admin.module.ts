import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routing,adminRoutingProviders } from './admin.routing';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    routing
  ],
  providers: [adminRoutingProviders],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

