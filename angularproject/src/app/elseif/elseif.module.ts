import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElseifRoutingModule } from './elseif-routing.module';
import { ElseifComponent } from './elseif/elseif.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
@NgModule({
  declarations: [ElseifComponent],
  imports: [
    CommonModule,
    ElseifRoutingModule,
    FormsModule
  ]
})
export class ElseifModule { }
