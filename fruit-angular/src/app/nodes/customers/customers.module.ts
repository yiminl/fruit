import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { UpdateCustomersComponent } from './update-customers/update-customers.component';


@NgModule({
  declarations: [
    AddCustomersComponent,
    UpdateCustomersComponent,
    CustomersComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class CustomersModule { }
