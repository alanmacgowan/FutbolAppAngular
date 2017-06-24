import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ITeam, IPagedResults } from '../shared/interfaces';
import { ExceptionService } from "./exception.service";
import { SpinnerService } from "./index";


@Injectable()
export class DataService {
  
    baseUrl: string = '/api/teams';

    constructor(private http: Http,
                private exceptionService: ExceptionService,
                private spinnerService: SpinnerService) { 

                }
    

    getTeams() : Observable<ITeam[]> {
        this.spinnerService.show();
        return this.http.get(this.baseUrl)
                        .map((res: Response) => {
                            let teams = res.json();
                            return teams;
                        })
                        .catch(this.exceptionService.catchBadResponse)
                        .finally(() => this.spinnerService.hide());
    }

    getTeamsPage(page: number, pageSize: number) : Observable<IPagedResults<ITeam[]>> {
        this.spinnerService.show();
        return this.http.get(`${this.baseUrl}/page/${page}/${pageSize}`)
                        .map((res: Response) => {
                            const totalRecords = +res.headers.get('x-inlinecount');
                            let teams = res.json();
                            return {
                                results: teams,
                                totalRecords: totalRecords
                            };
                        })
                        .catch(this.exceptionService.catchBadResponse)
                        .finally(() => this.spinnerService.hide());
    }

}
