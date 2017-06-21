import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CapitalizePipe } from './pipes/capitalize.pipe';


@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [CapitalizePipe ],
  exports: [ CommonModule, FormsModule, ReactiveFormsModule, CapitalizePipe ]
})
export class SharedModule { }
