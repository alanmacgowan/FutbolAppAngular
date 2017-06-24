import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from "./login.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserProfileService } from "../core/user-profile.service";
import { ToastService } from "../core/index";
import { Subscription } from "rxjs/Subscription";

@Component({
      moduleId: module.id,
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  private loginSub: Subscription;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private userProfileService: UserProfileService) {
  }

  public get isLoggedIn() : boolean {
    return this.userProfileService.isLoggedIn;
  }

  login() {
    this.loginSub = this.loginService
      .login()
      .mergeMap(loginResult => this.route.queryParams)
      .map(qp => qp['redirectTo'])
      .subscribe(redirectTo => {
        this.toastService.activate(`Successfully logged in`);
        if (this.userProfileService.isLoggedIn) {
          let url = redirectTo ? [redirectTo] : [ '/admin' ];
          this.router.navigate(url);
        }
      });
  }

  ngOnDestroy(): void {
    this.loginService.logout();
    this.toastService.activate(`Successfully logged out`);
  }

}
