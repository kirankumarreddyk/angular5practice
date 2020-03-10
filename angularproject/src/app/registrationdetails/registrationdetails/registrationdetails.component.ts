import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-registrationdetails',
  templateUrl: './registrationdetails.component.html',
  styleUrls: ['./registrationdetails.component.css']
})
export class RegistrationdetailsComponent implements OnInit {
firstName : string;
  model: any = {};
private dialogRef: any;
  constructor(public dialog: MatDialog) {}
    

  onSubmit() {
     this.dialogRef = this.dialog.open(RegistrationpopupComponent , {
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
  selector: 'app-normalmf',
  templateUrl: './registrationpopup.component.html',
 
})
export class RegistrationpopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit() {
    console.log("data : ", this.data);
  }
}