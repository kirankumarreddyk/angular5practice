import { Component, OnInit } from '@angular/core';
import { Inputshowhideinterface } from './inputshowhide.interface';
import { Arraysbindings } from '../../../common/allbindings';
import { from } from 'rxjs';
@Component({
  selector: 'app-inputshowhide',
  templateUrl: './inputshowhide.component.html',
  styleUrls: ['./inputshowhide.component.css']
})
export class InputshowhideComponent implements OnInit {
  public professionobj: Inputshowhideinterface;
  looking_forarray: any[] = [];
  public looking_for = '';
  constructor() { 
    this.looking_forarray = Arraysbindings.childStayingWith;
  }
  notworkingchange(value) {
    if (this.professionobj.workingpart === '0') {
      // this.professionobj.professionalGroup = null;
      // this.professionobj.professionId = null;
      this.professionobj.companyName = null;
      // this.professionobj.currency = null;
      // this.professionobj.monthlySalary = null;
      // this.professionobj.workingFromDate = '0';
    }
    if (value === '0') {
      this.professionobj.looking_for = '42';
    } else {
      this.professionobj.looking_for = null;
    }
  }

  motherhousewife() {
    if (this.professionobj.HouseWife === false) {
      this.professionobj.professionCategoryId = null;
      this.professionobj.designation = '';
      this.professionobj.companyName = '';
    }
  }
  resetsisterpage() {
    if (this.professionobj.HouseWifechk === false) {
      this.professionobj.SisCompanyName = '';
      // this.professionobj.SisJobLocation = '';
    }
  }

  ngOnInit() {
    this.professionobj = {
      workingpart: null,
      companyName: '',
      looking_for: '',
      HouseWife: false,
      professionCategoryId: '',
      designation: '',
      sisprofessiondetails: '',
      HouseWifechk: false,
      SisCompanyName: '',
    };
  }

}
