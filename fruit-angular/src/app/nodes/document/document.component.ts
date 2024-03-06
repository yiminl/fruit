import { Component } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  productsList = [
    {id:1, name: 'Linux VDA'},
    {id:2, name: 'Cloud'},
    {id:3, name: 'WEM'},
    {id:4, name: 'Director'},
    {id:5, name: 'SRT'},
    {id:6, name: 'Web Studio'},
  ]
}
