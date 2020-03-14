import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Login } from '../main/login/login.model';
import { User } from '../model/user.model';
import { Token } from 'app/main/login/token.model';

@Injectable()
export class GatewayService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:9091';
    // this.url = 'http://health2gether-api.sa-east-1.elasticbeanstalk.com'
  }

  login(login: Login): Observable<Token> {
    // return this.http.get<User>(`${this.url}/users/?email=${login.email}&password=${login.password}`);

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    //   observe: 'response' as 'response'
    // };
    
    return this.http.post<Token>(`${this.url}/login`, login);
  }
    
}
