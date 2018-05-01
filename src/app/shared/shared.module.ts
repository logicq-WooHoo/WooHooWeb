import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from './shopping-cart-service';
import { TaxService } from './tax-service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule
  ],
  providers: [ShoppingCartService, TaxService/*LocationService*/]
})
export class SharedModule { }

