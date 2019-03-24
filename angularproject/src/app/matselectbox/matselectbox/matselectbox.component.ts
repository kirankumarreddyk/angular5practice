import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-matselectbox',
  templateUrl: './matselectbox.component.html',
  styleUrls: ['./matselectbox.component.css']
})
export class MatselectboxComponent implements OnInit {

  constructor() { }
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  ngOnInit() {
  }

}
