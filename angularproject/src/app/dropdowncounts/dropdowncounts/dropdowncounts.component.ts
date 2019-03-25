import { Component, OnInit } from '@angular/core';
import { Arraysbindings } from '../../../common/allbindings';
import { Dropdowncountsinterface } from '../dropdowncounts/dropdowncounts.interface';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dropdowncounts',
  templateUrl: './dropdowncounts.component.html',
  styleUrls: ['./dropdowncounts.component.css'],
  providers: [
    { provide: ToastrService } ]
})
export class DropdowncountsComponent implements OnInit {
  public sibingobj: Dropdowncountsinterface;
  public sibingInsertObj = {};
  public siblingCountArray = [];
  mySettings = Arraysbindings.mySettings;
  mysingleSettings = Arraysbindings.mysingleSettings;
  myTexts = Arraysbindings.myTexts;
  constructor(private toastr: ToastrService) {
    this.siblingCountArray = Arraysbindings.numbersBind('', 0, 10);
   }
  checkVal(val) {
    return (val !== '' && val !== undefined) ? val : 0;
  }

  SiblingInsertSubmit(model: Dropdowncountsinterface, isValid: boolean) {
    if (isValid === true) {
      let totalnofBrothers = parseInt(this.checkVal(model.noOfBrothers));
      let elderBrotherCount = parseInt(this.checkVal(model.noOfElderBro));
      let youngerBrotherCount = parseInt(this.checkVal(model.noOfYoungerBro));
      let totalnoFSister = parseInt(this.checkVal(model.noOfSisters));
      let elderSisterCount = parseInt(this.checkVal(model.noOfElderSis));
      let youngerSisterCount = parseInt(this.checkVal(model.noOfYoungerSis));
      if ((totalnofBrothers === 0 || totalnofBrothers === (elderBrotherCount + youngerBrotherCount)) && (totalnoFSister === 0 || totalnoFSister === (elderSisterCount + youngerSisterCount))) {
         } else {
        this.toastr.error('Please enter Correct Sibling count', 'Alert!', { timeOut: 4000 });
      }
    }
  }
  siblingcount(type, noofcount) {
    if (type == 'brother' && parseInt(noofcount) === 0) {
      this.sibingobj.noOfElderBro = 0;
      this.sibingobj.noOfYoungerBro = 0;
    }
    else if (type == 'sister' && parseInt(noofcount) === 0) {
      this.sibingobj.noOfElderSis = 0;
      this.sibingobj.noOfYoungerSis = 0;
    }
  }
  ngOnInit() {
    this.sibingobj = {
      noOfBrothers: null,
      noOfSisters: null,
      noOfElderBro: null,
      noOfYoungerBro: null,
      noOfElderSis: null,
      noOfYoungerSis: null
    };
  }

}
