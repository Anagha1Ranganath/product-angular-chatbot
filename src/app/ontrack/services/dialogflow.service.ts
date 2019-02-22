import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';
import { environment } from '@env/environment';

@Injectable()
export class DialogflowService {

  private baseURL: String = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token: String = environment.token;

  constructor(private http: HttpClientModule) {}

  public getResponse(query: string) {
    const data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    };
    return this.http
      .post(`${this.baseURL}`, data, {headers: this.getHeaders()})
      .map(res => {
        return res.json();
      });
  }

  public getHeaders() {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
