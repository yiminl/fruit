import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CustomersComponent } from '../customers/customers.component';
import { BillComponent } from '../bill/bill.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductsComponent, 
    children: [
      {
        path: '',
        redirectTo: 'bill',
        pathMatch: 'full'
      },
      { 
        path: 'bill', 
        component:BillComponent,
      },
      { 
        path: 'customers', 
        component:CustomersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
