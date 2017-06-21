import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ITeam } from '../shared/interfaces';

@Injectable()
export class DataService {
  
    baseUrl: string = '/api/teams';

    constructor(private http: Http) { 

    }
    
    getTeams() : Observable<ITeam[]> {
        return this.http.get(this.baseUrl)
                   .map((res: Response) => {
                       let teams = res.json();
                       return teams;
                   })
                   .catch(this.handleError);
    }

    
    private handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
