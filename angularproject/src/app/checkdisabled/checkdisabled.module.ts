import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckdisabledRoutingModule } from './checkdisabled-routing.module';
import { CheckdisabledComponent } from './checkdisabled/checkdisabled.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [CheckdisabledComponent],
  imports: [
    CommonModule,
    CheckdisabledRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ]
})
export class CheckdisabledModule { }
