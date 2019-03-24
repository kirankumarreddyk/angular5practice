import { Component, OnInit,ViewChild } from '@angular/core';
import { Validationinterface } from './validations.interface';
import { NgForm } from '@angular/forms';
import { Arraysbindings} from '../../../common/allbindings';
import { from } from 'rxjs';
@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {
  public brotherobj: Validationinterface;
  @ViewChild(NgForm) BrotherForm: NgForm;
  looking_forarray: any[] = [];
  constructor() {
    this.looking_forarray = Arraysbindings.childStayingWith;
   }
  BrotherInsertSubmit(model: ValidationsComponent, isValid: boolean) {
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