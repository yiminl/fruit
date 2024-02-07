import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document.component';
import { CvadDocumentComponent } from './cvad-document/cvad-document.component';
import { CloudDocumentComponent } from './cloud-document/cloud-document.component';

const routes: Routes = [
  { 
    path: '', 
    component: DocumentComponent,
    children: [
      {
        path: '',
        redirectTo: 'cvad',
        pathMatch: 'full',
      },
      {
        path: 'cvad',
        component: CvadDocumentComponent,
      },
      {
        path: 'cloud',
        component: CloudDocumentComponent,
      }

    ], 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
