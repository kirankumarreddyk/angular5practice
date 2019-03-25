import { Component, OnInit,ViewChild } from '@angular/core';
import { Hidevalidationinterface } from './hidevalidation.interface';
import { Arraysbindings } from '../../../common/allbindings';
import { NgForm } from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-hidevalidation',
  templateUrl: './hidevalidation.component.html',
  styleUrls: ['./hidevalidation.component.css']
})
export class HidevalidationComponent implements OnInit {
  @ViewChild(NgForm) professionform: NgForm;
  public professionobj: Hidevalidationinterface;
  public visastatusarray = [];
  public mysingleSettings = Arraysbindings.mysingleSettings;
  public myTexts = Arraysbindings.myTextsSingle;
  constructor() { 
    this.visastatusarray = Arraysbindings.visastatus;
  }
  SubmitProfession(model: Hidevalidationinterface, isValid: boolean) {
  }
  ngOnInit() {
    this.professionobj ={
      employedIn: null,
      professionalGroup: null,
      workingpart: null,
      HouseWife: false,
      professionCategoryId: null,
    };
  }
  motherhousewife() {
    if (this.professionobj.HouseWife === false) {
      this.professionobj.professionCategoryId = null;
      // this.motherobj.designation = '';
      // this.motherobj.companyName = '';
      // this.motherobj.jobLocation = '';
    }
  }
  notworkingchange(value) {
    if (this.professionobj.workingpart === '0') {
      this.professionobj.professionalGroup = null;
      // this.professionobj.professionId = null;
      // this.professionobj.companyName = null;
      // this.professionobj.currency = null;
      // this.professionobj.monthlySalary = null;
      // this.professionobj.workingFromDate = '0';
    }
    // if (value === '522') {
    //   this.professionobj.employedIn = 5;
    // } else {
    //   this.professionobj.employedIn = null;
    // }
  }

}