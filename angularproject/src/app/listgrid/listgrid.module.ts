import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListgridRoutingModule } from './listgrid-routing.module';
import { ListgridComponent } from './listgrid/listgrid.component';

@NgModule({
  declarations: [ListgridComponent],
  imports: [
    CommonModule,
    ListgridRoutingModule
  ]
})
export class ListgridModule { }
