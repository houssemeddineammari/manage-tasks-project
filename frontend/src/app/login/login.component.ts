import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;
  public msgerror: boolean;
  public succesMessage: boolean;

  // DI : injecting the router in the constructor
  // the router will be available in this component

  constructor(private router: Router, private hardcodedAuthentication : HardcodedAuthenticationService) { }

  ngOnInit() {
    this.userName = null;
    this.password = null;
    this.msgerror = false;
    this.succesMessage = false;
  }

  public handleLogin() {

    if (this.hardcodedAuthentication.authenticate(this.userName, this.password)) {
      this.msgerror = false;
      this.succesMessage = true;
      this.router.navigate(['welcome', this.userName]);
    }
    else {
      this.msgerror = true;
        this.succesMessage = false;
      // this.router.navigate(['error']);
    }
  }
}
