import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Login } from '../main/login/login.model';
import { User } from '../model/user.model';

@Injectable()
export class GatewayService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8082';
  }

  login(login: Login): Observable<User> {
    return this.http.get<User>(`${this.url}/users/?email=${login.email}&password=${login.password}`);
  }

  /*
      saveOrder(order): Promise<any>
      {
          return new Promise((resolve, reject) => {
              this._httpClient.post('api/e-commerce-orders/' + order.id, order)
                  .subscribe((response: any) => {
                      resolve(response);
                  }, reject);
          });
      }
    */
}
