import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { AddBillComponent } from './add-bill/add-bill.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';


@NgModule({
  declarations: [
    BillComponent,
    AddBillComponent,
    UpdateBillComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule,
    NzTableModule,
    FormsModule
  ]
})
export class BillModule { }
