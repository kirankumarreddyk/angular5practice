import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatinputRoutingModule } from './matinput-routing.module';
import { MatinputComponent } from './matinput/matinput.component';
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
  declarations: [MatinputComponent],
  imports: [
    CommonModule,
    MatinputRoutingModule,
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
export class MatinputModule { }
