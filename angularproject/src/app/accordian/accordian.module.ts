import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordianRoutingModule } from './accordian-routing.module';
import { AccordianComponent } from './accordian/accordian.component';
import { FormsModule } from '@angular/forms'
import { FilterPipe } from './../filter.pipe';
// 2nd 
import { AccordionModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [AccordianComponent,FilterPipe],
  imports: [
    CommonModule,
    AccordianRoutingModule,
    FormsModule,
    AccordionModule
  ]
})
export class AccordianModule { }
