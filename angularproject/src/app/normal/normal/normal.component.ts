import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css'],
})

export class NormalComponent implements OnInit {
 firstName : string;
  model: any = {};
private dialogRef: any;
  constructor(public dialog: MatDialog) {}
    

  onSubmit() {
     this.dialogRef = this.dialog.open(ApppComponent , {
                                    width: '500px',
                                    height: '25%',
                                    data: this.model
                                });
                             
    console.log(this.model)
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  ngOnInit() {
    
  }

}
@Component({
  selector: 'app-normalf',
  templateUrl: './appp.component.html',
 
})
export class ApppComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit() {
    console.log("data : ", this.data);
  }
}

