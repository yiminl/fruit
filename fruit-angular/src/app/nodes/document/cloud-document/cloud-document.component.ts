import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cloud-document',
  templateUrl: './cloud-document.component.html',
  styleUrls: ['./cloud-document.component.css']
})
export class CloudDocumentComponent {
  hidden = false;

  constructor(private httpClient: HttpClient) {}
  onClickA() {
    this.hidden = !this.hidden;
  }

  submitID() {
    this.httpClient.get('http://10.157.14.51:8080/getName').subscribe(console.log);
  }
}
