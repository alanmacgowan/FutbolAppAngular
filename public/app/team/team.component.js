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
var router_1 = require("@angular/router");
var data_service_1 = require("../core/data.service");
var TeamComponent = (function () {
    function TeamComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.teams = [];
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamComponent.prototype.getTeams = function () {
        var _this = this;
        this.dataService.getTeams()
            .subscribe(function (response) {
            _this.teams = response;
        }, function (err) { return console.log(err); }, function () { return console.log('getTeams() retrieved teams'); });
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-team',
        templateUrl: 'team.component.html',
        styleUrls: ['team.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        data_service_1.DataService])
], TeamComponent);
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map