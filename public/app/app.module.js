"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("./core/rxjs-extensions");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var page_not_found_component_1 = require("./page-not-found.component");
var shared_module_1 = require("./shared/shared.module");
var core_module_1 = require("./core/core.module");
var team_module_1 = require("./team/team.module");
var footer_component_1 = require("./footer.component");
var header_component_1 = require("./header.component");
var login_module_1 = require("./login/login.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            page_not_found_component_1.PageNotFoundComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            login_module_1.LoginModule,
            dashboard_module_1.DashboardModule,
            team_module_1.TeamModule,
            app_routing_module_1.AppRoutingModule,
            core_module_1.CoreModule,
            shared_module_1.SharedModule //Shared (multi-instance) objects
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map