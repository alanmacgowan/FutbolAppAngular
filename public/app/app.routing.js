"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var team_component_1 = require("./team/team.component");
var routes = [
    { path: 'teams', component: team_component_1.TeamComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/teams' } //catch any unfound routes and redirect to home page
];
exports.appRouting = {
    routes: router_1.RouterModule.forRoot(routes),
    components: [team_component_1.TeamComponent]
};
//# sourceMappingURL=app.routing.js.map