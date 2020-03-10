import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
export interface Validationinterface {
     email: string;
      password: string;
}
@Component({
  selector: 'app-disabledsubmit',
  templateUrl: './disabledsubmit.component.html',
  styleUrls: ['./disabledsubmit.component.css']
})
export class DisabledsubmitComponent implements OnInit {

    public brotherobj: Validationinterface;
  @ViewChild(NgForm) loginForm: NgForm;
    errMsg = "";
  constructor() { }

  items = [{name: 'Fred', chosen: false}, 
{name: 'Barney', chosen: false}, 
{name: 'Dino', chosen: false}];
Selected () {
   return !this.items.some(item => item.chosen);
    } 
 
  ngOnInit() {
         this.brotherobj = {
     email: '',
      password: '',
    };
  }

}
