import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { from } from 'rxjs';
export interface Emailpasswordinterface {
  emailpassword: string;
  cnfmpassword: string;
}
@Component({
  selector: 'app-inputconfirmpaswd',
  templateUrl: './inputconfirmpaswd.component.html',
  styleUrls: ['./inputconfirmpaswd.component.css']
})
export class InputconfirmpaswdComponent implements OnInit {
  emailpasswordobj: Emailpasswordinterface;
  @ViewChild(NgForm) epasswordform: NgForm;
  constructor() { }
  emailpasswordsubmit(model: Emailpasswordinterface, isValid: boolean): void {
  }
  ngOnInit() {
    this.emailpasswordobj = {
      emailpassword: '',
      cnfmpassword: ''
    };
  }

}
