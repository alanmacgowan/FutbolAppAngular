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
var page_not_found_component_1 = require("./page-not-found.component");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var login_module_1 = require("./login/login.module");
var auth_guard_service_1 = require("./core/auth-guard.service");
var user_profile_service_1 = require("./core/user-profile.service");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [auth_guard_service_1.AuthGuard],
        canActivateChild: [auth_guard_service_1.AuthGuard],
        canLoad: [auth_guard_service_1.AuthGuard],
    },
    { path: 'login', component: login_module_1.LoginModule },
    { path: 'dashboard', component: dashboard_module_1.DashboardModule },
    { path: 'teams', loadChildren: 'app/team/team.module#TeamModule' },
    { path: '**', pathMatch: 'full', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })],
        exports: [router_1.RouterModule],
        providers: [
            auth_guard_service_1.AuthGuard,
            user_profile_service_1.UserProfileService
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map