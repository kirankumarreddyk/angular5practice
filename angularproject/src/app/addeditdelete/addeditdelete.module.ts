import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddeditdeleteRoutingModule } from './addeditdelete-routing.module';
import { AddeditdeleteComponent } from './addeditdelete/addeditdelete.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { DataTableModule, ButtonModule, SharedModule } from 'primeng/primeng'; // add delete save

@NgModule({
  declarations: [AddeditdeleteComponent],
  imports: [
    CommonModule,
    AddeditdeleteRoutingModule,
    FormsModule, DataTableModule, ButtonModule, SharedModule
  ]
})
export class AddeditdeleteModule { }


// add edit and delete
// npm install primeng--save
// npm install primeicons--save
