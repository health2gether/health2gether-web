import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    console.log('signupUser');
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .catch(
    //     error => console.log(error)
    //   )
  }

  signinUser(email: string, password: string) {
    console.log('signinUser');

    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(
    //     response => {
    //       this.router.navigate(['/']);
    //       firebase.auth().currentUser.getToken()
    //         .then(
    //           (token: string) => this.token = token
    //         )
    //     }
    //   )
    //   .catch(
    //     error => console.log(error)
    //   );
  }

  logout() {
    console.log('logout');
    //firebase.auth().signOut();
    // this.token = null;
  }

  getToken() {
    console.log('getToken');
    // firebase.auth().currentUser.getToken()
    //   .then(
    //     (token: string) => this.token = token
    //   );
    // return this.token;
  }

  isAuthenticated() {
    console.log('isAuthenticated');
    return this.token != null;
  }
}
