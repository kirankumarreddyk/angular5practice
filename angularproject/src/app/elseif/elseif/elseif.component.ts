import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elseif',
  templateUrl: './elseif.component.html',
  styleUrls: ['./elseif.component.css']
})
export class ElseifComponent implements OnInit {

  public rbtndomacilesearch: any = {};
  public rbtndomaciletext: any = {};
  constructor() { 
    if (this.rbtndomacilesearch === '1') {
      this.rbtndomaciletext = "India";
    } else if (this.rbtndomacilesearch === '0') {
      this.rbtndomaciletext = "Abroad";
    } else {
      this.rbtndomaciletext = "Country Both";
    }
  }

  ngOnInit() {
  }

}
