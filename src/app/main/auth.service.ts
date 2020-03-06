import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, pipe, of, throwError,  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { GatewayService } from 'app/shared/gateway.service';
import { Login } from './login/login.model';
import { User } from '../model/user.model';

@Injectable()
export class AuthService {
  // token: string;
  user: User;

  constructor(private router: Router, private gatewayService: GatewayService) { }

  login(login: Login): Observable<any> {
    // this.gatewayService.login(login)
    //   .subscribe(
    //     user => {
    //       console.log(user);
    //       this.user = user;
    //       this.router.navigate(['/']);
    //     },
    //     error => {
    //       console.log(error);
    //       this.user = null;
    //     }
    //   ); 
    
    return this.gatewayService.login(login)
      .pipe(
        map(userResponse => {
          console.log(userResponse);
          this.user = userResponse;
          return true;
        }),
        catchError(error => {
          console.log(error);
          this.user = null;
          return of(false);
        })
      );
  }

  logout() {
    this.user = null;
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    console.log('isAuthenticated');
    return this.user != null;
  }
}
