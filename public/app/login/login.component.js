"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var user_profile_service_1 = require("../core/user-profile.service");
var index_1 = require("../core/index");
var LoginComponent = (function () {
    function LoginComponent(loginService, route, router, toastService, userProfileService) {
        this.loginService = loginService;
        this.route = route;
        this.router = router;
        this.toastService = toastService;
        this.userProfileService = userProfileService;
    }
    Object.defineProperty(LoginComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.userProfileService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginSub = this.loginService
            .login()
            .mergeMap(function (loginResult) { return _this.route.queryParams; })
            .map(function (qp) { return qp['redirectTo']; })
            .subscribe(function (redirectTo) {
            _this.toastService.activate("Successfully logged in");
            if (_this.userProfileService.isLoggedIn) {
                var url = redirectTo ? [redirectTo] : ['/admin'];
                _this.router.navigate(url);
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.loginService.logout();
        this.toastService.activate("Successfully logged out");
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.ActivatedRoute,
        router_1.Router,
        index_1.ToastService,
        user_profile_service_1.UserProfileService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map