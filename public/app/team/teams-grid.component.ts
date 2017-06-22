import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Sorter } from '../core/sorter';
import { TrackByService } from '../core/trackby.service';
import { ITeam } from "../shared/interfaces";

@Component({
  moduleId: module.id,
  selector: 'teams-grid', 
  templateUrl: 'teams-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class TeamsGridComponent implements OnInit {

  @Input() teams: ITeam[] = [];

  constructor(private sorter: Sorter, public trackby: TrackByService) { }
   
  ngOnInit() {

  }

  sort(prop: string) {
      this.sorter.sort(this.teams, prop);
  }

}
