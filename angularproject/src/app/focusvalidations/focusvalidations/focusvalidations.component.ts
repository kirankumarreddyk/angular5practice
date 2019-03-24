import { Component, OnInit, ViewChild } from '@angular/core';
import { Focusvalidationinterface } from './focusvalidations.interface';
import { NgForm } from '@angular/forms';
import { Arraysbindings } from '../../../common/allbindings';
import { from } from 'rxjs';
@Component({
  selector: 'app-focusvalidations',
  templateUrl: './focusvalidations.component.html',
  styleUrls: ['./focusvalidations.component.css']
})
export class FocusvalidationsComponent implements OnInit {
  public brotherobj: Focusvalidationinterface;
  @ViewChild(NgForm) BrotherForm: NgForm;
  looking_forarray: any[] = [];
  constructor() {
    this.looking_forarray = Arraysbindings.childStayingWith;
  }
  BrotherInsertSubmit(model: Focusvalidationinterface, isValid: boolean) {
  }
  ngOnInit() {
    this.brotherobj = {
      BroName: '',
      password: '',
      email: '',
      Mobilenumber: '',
      looking_for: '',
    };
  }
}