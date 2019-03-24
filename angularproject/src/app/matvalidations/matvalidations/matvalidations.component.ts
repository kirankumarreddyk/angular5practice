import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Matvakidationsinterface, Profilesettinginterface, Profilesettingnumber, Profilesettingpassword, Profilesettingdelete, Managealerts } from './matvalidations.interface';
import { from } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
@Component({
  selector: 'app-matvalidations',
  templateUrl: './matvalidations.component.html',
  styleUrls: ['./matvalidations.component.css']
})
export class MatvalidationsComponent implements OnInit {
  @ViewChild('Profilesettingemail') Profilesettingemail: NgForm;
  @ViewChild('Profilesettingnumform') Profilesettingnumform: NgForm;
  @ViewChild('Profilesettingpassform') Profilesettingpassform: NgForm;
  @ViewChild('Profilesettingdeleteform') Profilesettingdeleteform: NgForm;
  @ViewChild('Profilesettingalerts') Profilesettingalerts: NgForm;
  public emailchk = false;
  public mobilechk = false;
  public passwordchk = false;
  public managealerts = false;
  public hidechk = false;
  public deletechk = false;
  selectedIndex = 0;
  public pageloadflag = 0;
  public profilesettingobj: Profilesettinginterface;
  public numberobj: Profilesettingnumber;
  public passwordobj: Profilesettingpassword;
  public deleteobj: Profilesettingdelete;
  public managealers: Managealerts;

  constructor() { }
  onLinkClick(event: MatTabChangeEvent) {
    this.getCustidinformation();
    this.selectedIndex = event.index;
  }
  getCustidinformation() {
    if (this.pageloadflag === 0) {
      this.pageloadflag = 1;
      // this.__DashboardService.getprofilesettinginfo().subscribe(res => {
      //   console.log(res);
      //   this.ticketinformation = res;
      //   this.pageloaddatabinding();
      // }, errr => console.log(errr));
    }
  }
  reseteforms(type) {
    switch (type) {
      case 'email':
        this.Profilesettingemail.resetForm();
        if (this.emailchk === true) {
          this.emailchk = false;
        }
        break;
      case 'mobile':
        this.Profilesettingnumform.resetForm();
        if (this.mobilechk === true) {
          this.mobilechk = false;
        }
        break;
      case 'password':
        this.Profilesettingpassform.resetForm();
        if (this.passwordchk === true) {
          this.passwordchk = false;
        }
        break;
      case 'alerts':
        this.Profilesettingalerts.resetForm();
        if (this.managealerts === true) {
          this.managealerts = false;
        }
        break;

      case 'delete':
        this.Profilesettingdeleteform.resetForm();
        if (this.deletechk === true) {
          this.deletechk = false;
        }
        break;
    }
    // setTimeout(() => {
    //   this.pageloaddatabinding();
    // }, 100);
  }

  ngOnInit() {
    this.passwordobj = {
      Password: '',
      unewpass: '',
      uconfmnewpass: ''
    };
    this.profilesettingobj = {
      currentemail: '',
      newemail: '',
      confirmemail: ''
    };
    this.numberobj = {
      currentmobilenum: '',
      countrycode: null,
      confmnewph: ''
    };
    this.deleteobj = {
      delete: '',
      chkdelete: false
    };
    this.managealers = {
      mailyes: '0',
      smsyes: '0',
    };
  }

}
