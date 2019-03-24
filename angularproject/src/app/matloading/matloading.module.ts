import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatloadingRoutingModule } from './matloading-routing.module';
import { MatloadingComponent } from './matloading/matloading.component';
import { MatProgressSpinnerModule } from '@angular/material';
@NgModule({
  declarations: [MatloadingComponent],
  imports: [
    CommonModule,
    MatloadingRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class MatloadingModule { }
