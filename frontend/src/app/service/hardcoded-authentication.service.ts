import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('before isLoggedIn is: ' +this.isLoggedIn());
    if (username === 'Houssem Eddine' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after isLoggedIn is:' +this.isLoggedIn())
      return true
  } else {
   return false;
  }
  }

  isLoggedIn() {
    let name = sessionStorage.getItem('authenticatedUser');
    return !(name === null)
  }

  isLoggedOut() {
    sessionStorage.clear();
  }
}
