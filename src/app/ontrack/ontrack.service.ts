
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable()
export class OnTrackService {
    url: any;
    response: any;
    constructor(private http: HttpClient) {

    }
    AddToCart(cart: any) {
        console.log('clcik event call');
        console.log(cart);
        this.url = 'http://localhost:3000/products';
        this.http.get(this.url).subscribe(resp => {
            console.log(resp);
        this.response = resp;
            });
        return this.response;
}
}
