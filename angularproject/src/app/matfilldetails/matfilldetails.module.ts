import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatfilldetailsRoutingModule } from './matfilldetails-routing.module';
import { MatfilldetailsComponent } from './matfilldetails/matfilldetails.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [MatfilldetailsComponent],
  imports: [
    CommonModule,
    MatfilldetailsRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule
  ]
})
export class MatfilldetailsModule { }


// style.css @import "~@angular/material/prebuilt-themes/indigo-pink.css";
// npm install--save @angular/material @angular/cdk @angular/animations
