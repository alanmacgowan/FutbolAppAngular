import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {

  currentYear: string;
  @Input() owner: string;

  constructor() { }

  ngOnInit() {
    var d = new Date();
    this.currentYear = d.getFullYear().toString();
    console.log("Current year is ", this.currentYear);
  }
  
}