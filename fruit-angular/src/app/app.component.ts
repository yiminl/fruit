import { Component } from '@angular/core';
import { RadomService } from './service/radom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  constructor(public radom: RadomService) {}
}
