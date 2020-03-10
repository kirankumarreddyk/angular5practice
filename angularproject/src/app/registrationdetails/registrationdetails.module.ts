import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationdetailsRoutingModule } from './registrationdetails-routing.module';
import { RegistrationdetailsComponent,RegistrationpopupComponent } from './registrationdetails/registrationdetails.component';
import { FormsModule } from '@angular/forms'
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [RegistrationdetailsComponent, RegistrationpopupComponent],
  imports: [
    CommonModule,
    RegistrationdetailsRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [RegistrationpopupComponent]
})
export class RegistrationdetailsModule { }
