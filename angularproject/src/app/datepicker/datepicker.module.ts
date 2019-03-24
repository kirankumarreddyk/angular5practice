import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MyDatePickerModule } from 'mydatepicker';
// 2nd
import { BsDatepickerModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    MyDatePickerModule,
    BsDatepickerModule.forRoot()
  ]
})
export class DatepickerModule { }


// npm install mydatepicker --save   // 1st

// link https://valor-software.com/ngx-bootstrap/#/datepicker

// ng add ngx-bootstrap  --component datepicker    //2nd
