import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RadomService } from 'src/app/service/radom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public radom: RadomService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmint() {
    this.route.navigateByUrl('/products');
  }
}
