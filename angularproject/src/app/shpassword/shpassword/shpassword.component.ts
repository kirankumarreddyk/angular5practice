import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shpassword',
  templateUrl: './shpassword.component.html',
  styleUrls: ['./shpassword.component.css']
})
export class ShpasswordComponent implements OnInit {

  constructor() { }
  type = "password";

  show = false;
  toggleShow() {
    this.show = !this.show;
    if (this.show) {
      this.type = "text";
    }
    else {
      this.type = "password";
    }
  }
  ngOnInit() {
  }

}
