import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule, routedComponents } from './login-routing.module';
import { LoginService } from "./login.service";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [routedComponents],
  providers: [LoginService]
})
export class LoginModule { }
