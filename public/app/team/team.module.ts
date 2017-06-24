import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule, routedComponents } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule
  ],
  declarations: [ routedComponents]
})
export class TeamModule { }
