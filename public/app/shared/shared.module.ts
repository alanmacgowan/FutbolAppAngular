import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterTextboxComponent } from "./filter-textbox/filter-textbox.component";
import { PaginationComponent } from "./pagination/pagination.component";

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [CapitalizePipe, FilterTextboxComponent, PaginationComponent  ],
  exports: [ CommonModule, FormsModule, ReactiveFormsModule, CapitalizePipe, FilterTextboxComponent, PaginationComponent  ]
})
export class SharedModule { }
