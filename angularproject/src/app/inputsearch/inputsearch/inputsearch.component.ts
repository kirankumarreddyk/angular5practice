import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputsearch',
  templateUrl: './inputsearch.component.html',
  styleUrls: ['./inputsearch.component.css']
})
export class InputsearchComponent implements OnInit {
  email="";
  aa:boolean=false;

  constructor() { }

  users=[{
    id:'123',
    email:'abc@gmail.com'
  },{
    id:'1234',
    email:'xyz@hotmail.com'
  },{
    id:'12345',
    email:'jsgsbh@kk.com'
  },{
    id:'123456',
    email:'test@gmail.com'
  }]

  setIndex(ii){
    this.aa=ii;
    console.log
  }
  //part 2
    searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];
    //part 2
  ngOnInit() {
  }

}
