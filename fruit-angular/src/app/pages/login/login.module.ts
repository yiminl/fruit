import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

import { CommonModule } from '@angular/common';
import { RadomService } from 'src/app/service/radom.service';


@NgModule({
  imports: [LoginRoutingModule, CommonModule,],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers:[RadomService]
})
export class LoginModule { }
