import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { AddBillComponent } from './add-bill/add-bill.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
    NzModalModule,
    FormsModule,
    NzButtonModule
  ]
})
export class BillModule { }
