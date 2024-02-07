import { Component } from '@angular/core';

@Component({
  selector: 'app-cvad-document',
  templateUrl: './cvad-document.component.html',
  styleUrls: ['./cvad-document.component.css']
})
export class CvadDocumentComponent {
  docName = 'hello cvad!!!';
  isActive = false;
  onClick() {
    this.isActive = !this.isActive;
  }
}
