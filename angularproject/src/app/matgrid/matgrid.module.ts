import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatgridRoutingModule } from './matgrid-routing.module';
import { MatgridComponent } from './matgrid/matgrid.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
@NgModule({
  declarations: [MatgridComponent],
  imports: [
    CommonModule,
    MatgridRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MatgridModule { }

// https://material.angular.io/components/table/overview