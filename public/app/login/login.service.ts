import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserProfileService } from "../core/user-profile.service";
import { SpinnerService } from "../core/index";


@Injectable()
export class LoginService {
  constructor(
    private spinnerService: SpinnerService,
    private userProfileService: UserProfileService) { }

  login() {
    return Observable.of(true)
        .do(_ => this.spinnerService.show())
        .delay(1000)
        .do(this.toggleLogState.bind(this));
  }

  logout() {
    this.toggleLogState(false);
  }

  private toggleLogState(val: boolean) {
    this.userProfileService.isLoggedIn = val;
    this.spinnerService.hide();
  }
}
