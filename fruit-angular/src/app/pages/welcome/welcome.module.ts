import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadomService } from 'src/app/service/radom.service';


@NgModule({
  imports: [WelcomeRoutingModule, CommonModule,],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  providers:[RadomService]
})
export class WelcomeModule { }
