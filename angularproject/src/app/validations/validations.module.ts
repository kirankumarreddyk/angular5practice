import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationsRoutingModule } from './validations-routing.module';
import { ValidationsComponent } from './validations/validations.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [ValidationsComponent],
  imports: [
    CommonModule,
    ValidationsRoutingModule,
    FormsModule
  ]
})
export class ValidationsModule { }
