import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found.component";
import { TeamModule } from "./team/team.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { LoginModule } from "./login/login.module";
import { AuthGuard } from "./core/auth-guard.service";
import { UserProfileService } from "./core/user-profile.service";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
  },
  { path: 'login', component: LoginModule},
  { path: 'dashboard', component: DashboardModule},
  { path: 'teams', loadChildren: 'app/team/team.module#TeamModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: [
    AuthGuard,
    UserProfileService
  ]
})
export class AppRoutingModule { }
