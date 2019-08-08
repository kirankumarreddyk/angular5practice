import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.css']
})
export class NgtemplateComponent implements OnInit {
  myDir= '';
  constructor() { }

  ngOnInit() {
  }
  toggleFlag1= true;
  toggleFlag2= true;
  toggleFlag3= true;
  
  onToggle1() {
	  this.toggleFlag1 = (this.toggleFlag1 === true)? false : true;
  }
  onToggle2() {
	  this.toggleFlag2 = (this.toggleFlag2 === true)? false : true;
  }
  onToggle3() {
	  this.toggleFlag3 = (this.toggleFlag3 === true)? false : true;
  }   

}
