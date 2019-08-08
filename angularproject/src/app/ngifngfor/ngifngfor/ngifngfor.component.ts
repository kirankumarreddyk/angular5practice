import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifngfor',
  templateUrl: './ngifngfor.component.html',
  styleUrls: ['./ngifngfor.component.css']
})
export class NgifngforComponent implements OnInit {
 
  myArray: number[] = [11,22,33,44,55,66,77,88,9,9,9,9,9,9,9,9,9,99,,9,99,9,9,9,9,99,9,9,99,99,9,];
  constructor() { }
// 2nd
People: any [] = [
  {"name": "Douglas", "age": 35    },
  {"name": "McLeod ", "age": 32},
  {"name": "Meyers", "age": 21},
  {"name": "Aguirre ", "age": 34    },
  {"name": "Cook ", "age": 32    }
];
// 3rd
isValid: boolean = true;
     age:number = 12;
     changeValue(valid: boolean) {
	this.isValid = valid;
     }
// 4th
// isValid: boolean = true;
//      age:number = 12;
//      changeValue(valid: boolean) {
// 	this.isValid = valid;
//      }

  ngOnInit() {
  }
  
  
}
