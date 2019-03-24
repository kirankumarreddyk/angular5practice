import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MataccordianRoutingModule } from './mataccordian-routing.module';
import { MataccordianComponent } from './mataccordian/mataccordian.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatCheckboxModule,
  MatSelectModule,
  MatExpansionModule
} from '@angular/material';
@NgModule({
  declarations: [MataccordianComponent],
  imports: [
    CommonModule,
    MataccordianRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule
  ]
})
export class MataccordianModule { }
