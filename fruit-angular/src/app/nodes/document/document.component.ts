import { Component } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  productsList = [
    {id:1, name: 'cvad'},
    {id:2, name: 'cloud'},
  ]
}
