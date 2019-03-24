import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MattabsRoutingModule } from './mattabs-routing.module';
import { MattabsComponent } from './mattabs/mattabs.component';
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
  declarations: [MattabsComponent],
  imports: [
    CommonModule,
    MattabsRoutingModule,
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
export class MattabsModule { }
