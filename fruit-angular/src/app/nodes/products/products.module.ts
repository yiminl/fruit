import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { BillModule } from '../bill/bill.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    BillModule,
    FormsModule,
    NzTableModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    DemoNgZorroAntdModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    ScrollingModule,
    DragDropModule
  ],
  exports: [
    ProductsComponent,
  ]
})
export class ProductsModule { }
