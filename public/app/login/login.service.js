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
var Observable_1 = require("rxjs/Observable");
var user_profile_service_1 = require("../core/user-profile.service");
var index_1 = require("../core/index");
var LoginService = (function () {
    function LoginService(spinnerService, userProfileService) {
        this.spinnerService = spinnerService;
        this.userProfileService = userProfileService;
    }
    LoginService.prototype.login = function () {
        var _this = this;
        return Observable_1.Observable.of(true)
            .do(function (_) { return _this.spinnerService.show(); })
            .delay(1000)
            .do(this.toggleLogState.bind(this));
    };
    LoginService.prototype.logout = function () {
        this.toggleLogState(false);
    };
    LoginService.prototype.toggleLogState = function (val) {
        this.userProfileService.isLoggedIn = val;
        this.spinnerService.hide();
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.SpinnerService,
        user_profile_service_1.UserProfileService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map