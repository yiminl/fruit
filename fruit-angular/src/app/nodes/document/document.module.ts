import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './document.component';
import { CvadDocumentComponent } from './cvad-document/cvad-document.component';
import { FormsModule } from '@angular/forms';
import { CloudDocumentComponent } from './cloud-document/cloud-document.component';


@NgModule({
  declarations: [
    DocumentComponent,
    CvadDocumentComponent,
    CloudDocumentComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    FormsModule
  ]
})
export class DocumentModule { }
