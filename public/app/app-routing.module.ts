import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found.component";
import { TeamModule } from "./team/team.module";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'teams', },
  //{ path: 'teams', component: TeamModule},
  { path: 'teams', loadChildren: 'app/team/team.module#TeamModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
