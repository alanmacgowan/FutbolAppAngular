import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ToastService } from "../core/toast/toast.service";


@Component({
  moduleId: module.id,
  selector: 'story-dashboard',
   templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {

  title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService) { }


  ngOnDestroy() {
  
  }

  ngOnInit() {
    this.route.data.subscribe((data: { title: string }) => {
      this.title = data.title;
    });
    this.toastService.activate('Welcome to the dashboard')
  }

}
