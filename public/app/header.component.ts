import { Component, OnInit, Input } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['/dashboard'] },
      { caption: 'Teams', link: ['/teams'] },
      { caption: 'Login', link: ['/login'] },
      { caption: 'Admin', link: ['/admin'] }
      ];
  }

  
}