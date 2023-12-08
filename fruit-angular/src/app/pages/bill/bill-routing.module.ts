import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill.component';
import { AddBillComponent } from './add-bill/add-bill.component';

const routes: Routes = [
  { 
    path: '', 
    component: BillComponent,
  },
  {path:'add-bill', component: AddBillComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
