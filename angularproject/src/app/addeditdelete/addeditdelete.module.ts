import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddeditdeleteRoutingModule } from './addeditdelete-routing.module';
import { AddeditdeleteComponent } from './addeditdelete/addeditdelete.component';

@NgModule({
  declarations: [AddeditdeleteComponent],
  imports: [
    CommonModule,
    AddeditdeleteRoutingModule
  ]
})
export class AddeditdeleteModule { }
