import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from "./team.component";

const routes: Routes = [
  { path: '', component: TeamComponent, data: {title: 'Teams'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }

export const routedComponents = [TeamComponent];