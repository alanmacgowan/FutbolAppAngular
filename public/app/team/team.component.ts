import { Component, OnInit } from '@angular/core';
import { ITeam, IPagedResults } from "../shared/interfaces";
import { Router } from "@angular/router";
import { DataService } from "../core/data.service";
import { DataFilterService } from "../core/data-filter.service";

@Component({
    moduleId: module.id,
    selector: 'app-team',
    templateUrl: 'team.component.html',
    styleUrls: ['team.component.css']
})
export class TeamComponent implements OnInit {

  title: string;
   teams: ITeam[] = [];
  filteredTeams: ITeam[] = [];

  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private router: Router, 
              private dataService: DataService,
              private dataFilter: DataFilterService) { }
  
  ngOnInit() {
    this.title = 'Teams';
    this.getTeamsPage(1);
  }

  filterChanged(filterText: string) {
    if (filterText && this.teams) {
        let props = ['name', 'description', 'city'];
        this.filteredTeams = this.dataFilter.filter(this.teams, props, filterText);
    }
    else {
      this.filteredTeams = this.teams;
    }
  }

  pageChanged(page: number) {
    this.getTeamsPage(page);
  }

  getTeamsPage(page: number) {
    this.dataService.getTeamsPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<ITeam[]>) => {
          this.teams = this.filteredTeams = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => console.log(err),
        () => console.log('getTeamsPage() retrieved teams'));
  }

}
