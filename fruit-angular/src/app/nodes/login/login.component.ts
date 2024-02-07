import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { RadomService } from 'src/app/service/radom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private httpClient: HttpClient, private route: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmint() {
    //this.httpClient.get('http://10.157.14.51:8080/login').subscribe(console.log)
    
    this.authService.canActive = true;
    //delay(1000),
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    this.route.navigate(['/products'], navigationExtras);
  }
}
