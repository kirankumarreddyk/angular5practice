import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Arraysbindings } from '../../../common/allbindings';
import { from } from 'rxjs';
export interface Helpinterface {
  Category: any[];
  castename: any[];
  MaritalStatus: any[];
}
@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {
  public helpobj: Helpinterface;
  @ViewChild(NgForm) help: NgForm;
 public Categoryarray = [];
  public EducationCategoryarray = [];
  public MaritalStatusarray = [];
  // mySettings = Arraysbindings.mySettings;
  // mysingleSettings = Arraysbindings.mysingleSettings;
  // myTexts = Arraysbindings.myTexts;

  constructor() { 
    this.Categoryarray = Arraysbindings.Category;
    this.EducationCategoryarray = Arraysbindings.educationcategorywithoutselect;
    this.MaritalStatusarray = Arraysbindings.MaritalStatussearch;
  }
  submithelp(model: Helpinterface, isValid: boolean) {
  }
  // input box color
  applycolors(value, id: HTMLInputElement, type) {
    let colors = "";
    if (value !== 0 && value !== "0" && value !== "" && value !== undefined && value !== null && value.length > 0 && value.toString() !== "--Select--") {
      colors = "";
      let menu = id.querySelector('button');
      menu.classList.add('bacg');
    } else {
      colors = "";
      let menu = id.querySelector('button');
      menu.classList.remove('bacg');
    }
    return colors;
  }
  applycolorstxtbox(value) {
    let colors = "selectborderclass";
    if (value !== "" && value !== undefined && value !== null) {
      colors = "selectborderclasscolor";
    }
    else {
      colors = "selectborderclass";
    }
    return colors;
  }
  // input box color

  ngOnInit() {
    this.helpobj = {
      Category: [],
      castename: [],
      MaritalStatus: []
    };
  }

}