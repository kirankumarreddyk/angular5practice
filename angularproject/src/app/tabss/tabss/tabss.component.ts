import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabss',
  templateUrl: './tabss.component.html',
  styleUrls: ['./tabss.component.css']
})
export class TabssComponent implements OnInit {
  public tabs; //2
  constructor() { 
    //2
    this.tabs = [
      { title: "foo1", content: "bar1" },
      { title: "foo2", content: "bar2" },
      { title: "foo3", content: "bar3" }
    ];
    //2
  }

  ngOnInit() {
  }

}
