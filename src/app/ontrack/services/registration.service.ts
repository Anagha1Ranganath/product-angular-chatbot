import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Myregistration } from '../classes/myregistration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url: string;
   response: any;
   get: any;
  //  @Input()
  //  reg: Myregistration;
   // @Input()
   // springEndPoint: String;
constructor(private http: HttpClient ) {}
  addregister(reg: Myregistration) {
    this.url = 'http://localhost:8805/api/v1/registration';
   this.http.get(this.url).subscribe(resp => {
       console.log(resp);
   this.response = resp;
       });
   return this.http
   .post(this.url + '', reg, {observe: 'response'});
   }
}
