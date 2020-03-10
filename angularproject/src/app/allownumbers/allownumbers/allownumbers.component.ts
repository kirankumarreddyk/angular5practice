import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-allownumbers',
  templateUrl: './allownumbers.component.html',
  styleUrls: ['./allownumbers.component.css']
})
export class AllownumberComponent implements OnInit {

  constructor() { }


  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  ngOnInit() {
  }

}
