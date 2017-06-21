import { Component, OnInit } from '@angular/core';
import { ITeam } from "../shared/interfaces";
import { Router } from "@angular/router";
import { DataService } from "../core/data.service";

@Component({
    moduleId: module.id,
    selector: 'app-team',
    templateUrl: 'team.component.html',
    styleUrls: ['team.component.css']
})
export class TeamComponent implements OnInit {

  teams: ITeam[] = [];

  constructor(private router: Router, 
              private dataService: DataService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.dataService.getTeams()
        .subscribe((response) => {
          this.teams = response;
        },
        (err: any) => console.log(err),
        () => console.log('getTeams() retrieved teams'));
  }

}
