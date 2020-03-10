import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllownumbersRoutingModule } from './allownumbers-routing.module';
import { AllownumberComponent } from './allownumbers/allownumbers.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AllownumberComponent],
  imports: [
    CommonModule,
    AllownumbersRoutingModule,
  FormsModule
  ]
})
export class AllownumbersModule { }


