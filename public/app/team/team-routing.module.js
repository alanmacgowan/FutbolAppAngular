"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var team_component_1 = require("./team.component");
var teams_grid_component_1 = require("./teams-grid.component");
var routes = [
    { path: '', component: team_component_1.TeamComponent, data: { title: 'Teams' } },
];
var TeamRoutingModule = (function () {
    function TeamRoutingModule() {
    }
    return TeamRoutingModule;
}());
TeamRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], TeamRoutingModule);
exports.TeamRoutingModule = TeamRoutingModule;
exports.routedComponents = [team_component_1.TeamComponent, teams_grid_component_1.TeamsGridComponent];
//# sourceMappingURL=team-routing.module.js.map