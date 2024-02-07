import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class RadomService {
    public radomValue = Math.random().toFixed(1);
    public locale = 'en';
}