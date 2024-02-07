import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  canActive = false;
  //console.log(this.canActive);
  constructor() { 
    console.log(this.canActive);
  }
}
