import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickeventRoutingModule } from './clickevent-routing.module';
import { ClickeventComponent } from './clickevent/clickevent.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { MatCheckboxModule } from '@angular/material';
@NgModule({
  declarations: [ClickeventComponent],
  imports: [
    CommonModule,
    ClickeventRoutingModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class ClickeventModule { }
