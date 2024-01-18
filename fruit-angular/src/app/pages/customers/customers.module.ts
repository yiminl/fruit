import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomersComponent
  ],
  imports: [
    CommonModule,
    //CustomersRoutingModule
  ]
})
export class CustomersModule { }
