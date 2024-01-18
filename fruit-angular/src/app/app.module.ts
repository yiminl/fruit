import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RadomService } from './service/radom.service';
import { LoginModule } from './pages/login/login.module';
import { ProductsModule } from './pages/products/products.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    DemoNgZorroAntdModule,
    NzMenuModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    ScrollingModule,
    DragDropModule,
    LoginModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    RadomService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
