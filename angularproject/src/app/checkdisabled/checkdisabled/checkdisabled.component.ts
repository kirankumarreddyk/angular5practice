import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkdisabled',
  templateUrl: './checkdisabled.component.html',
  styleUrls: ['./checkdisabled.component.css']
})
export class CheckdisabledComponent implements OnInit {

  constructor() { }
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  ngOnInit() {
  }

}
