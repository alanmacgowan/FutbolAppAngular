import { RouterModule, Routes } from '@angular/router';

import { TeamComponent } from './team/team.component';
import { IRouting } from './shared/interfaces';

const routes: Routes = [
  { path: 'teams', component: TeamComponent},
  { path: '**', pathMatch:'full', redirectTo: '/teams' } //catch any unfound routes and redirect to home page
];

export const appRouting: IRouting = { 
    routes: RouterModule.forRoot(routes),
    components: [ TeamComponent ]
};
