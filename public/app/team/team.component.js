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
var data_filter_service_1 = require("../core/data-filter.service");
var TeamComponent = (function () {
    function TeamComponent(router, dataService, dataFilter) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.teams = [];
        this.filteredTeams = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.title = 'Teams';
        this.getTeamsPage(1);
    };
    TeamComponent.prototype.filterChanged = function (filterText) {
        if (filterText && this.teams) {
            var props = ['name', 'description', 'city'];
            this.filteredTeams = this.dataFilter.filter(this.teams, props, filterText);
        }
        else {
            this.filteredTeams = this.teams;
        }
    };
    TeamComponent.prototype.pageChanged = function (page) {
        this.getTeamsPage(page);
    };
    TeamComponent.prototype.getTeamsPage = function (page) {
        var _this = this;
        this.dataService.getTeamsPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.teams = _this.filteredTeams = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return console.log(err); }, function () { return console.log('getTeamsPage() retrieved teams'); });
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
        data_service_1.DataService,
        data_filter_service_1.DataFilterService])
], TeamComponent);
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map