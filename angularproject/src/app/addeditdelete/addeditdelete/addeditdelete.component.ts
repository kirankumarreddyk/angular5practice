import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addeditdelete',
  templateUrl: './addeditdelete.component.html',
  styleUrls: ['./addeditdelete.component.css']
})
export class AddeditdeleteComponent implements OnInit {
//ADD DELETE
private fieldArray: Array<any> = [];
private newAttribute: any = {};

addFieldValue() {
  this.fieldArray.push(this.newAttribute)
  this.newAttribute = {};
}

deleteFieldValue(index) {
  this.fieldArray.splice(index, 1);
}
 //ADD DELETE

constructor() { }
ngOnInit() {
}
  // ADD EDIT AND DELETE

data: any = [];
delRow;
editRow(row) {
  this.data.filter(row => row.isEditable).map(r => { r.isEditable = false; return r })
  row.isEditable = true;
}

save(row) {
  row.isEditable = false
}

addNew() {
  this.data.push({
    name: '',
    value: ''
  })
  this.data[this.data.length - 1].isEditable = true;
}

delete(row) {
  console.log(row);
  this.delRow = this.data.indexOf(row);
  this.data.splice(this.delRow, 1);
  console.log(this.data);

}

getData() {
  this.data = [
    { name: "Name1", value: "value1" },
    { name: "Name2", value: "value2" },
    { name: "Name3", value: "value3" },
    { name: "Name4", value: "value4" }
  ];
  this.data.map(row => {
    row.isEditable = false;
  });

};
// ADD EDIT AND DELETE
// add last
heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
