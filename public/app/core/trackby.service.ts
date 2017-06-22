import { Injectable } from '@angular/core';

import { ITeam } from '../shared/interfaces';

@Injectable()
export class TrackByService {
  
  customer(index: number, team: ITeam) {
    return team._id;
  }
  
}