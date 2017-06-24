import { NgModule } from '@angular/core';

import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [DashboardRoutingModule, SharedModule, CoreModule],
  declarations: [routedComponents]
})
export class DashboardModule { }