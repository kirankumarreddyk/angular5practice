import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisabledsubmitRoutingModule } from './disabledsubmit-routing.module';
import { DisabledsubmitComponent } from './disabledsubmit/disabledsubmit.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [DisabledsubmitComponent],
  imports: [
    CommonModule,
    DisabledsubmitRoutingModule,
    FormsModule
  ]
})
export class DisabledsubmitModule { }
