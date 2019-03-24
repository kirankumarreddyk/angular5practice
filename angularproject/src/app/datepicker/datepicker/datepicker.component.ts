import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor() { }
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd-mm-yyyy',
    dayLabels: { su: 'Sun', mo: 'Mon', tu: 'Tue', we: 'Wed', th: 'Thu', fr: 'Fri', sa: 'Sat' }
  };
  ngOnInit() {
  }

}
