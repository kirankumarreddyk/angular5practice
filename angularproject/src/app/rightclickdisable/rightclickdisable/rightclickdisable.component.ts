import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightclickdisable',
  templateUrl: './rightclickdisable.component.html',
  styleUrls: ['./rightclickdisable.component.css']
})
export class RightclickdisableComponent implements OnInit {

  constructor() { }
  onRightClick() {
    return false;
  }
  ngOnInit() {
  }

}
