import { RequestLogin } from './../../resources/models/RequestLogin';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/resources/models/services/login.service';
import { AlertService } from 'src/app/resources/models/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin!: RequestLogin;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void{
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
      this.router.navigate(['cadastro']);
    },
    (httpError) => {
      this.alertService.error(httpError.error.message);
    });
  }
}
