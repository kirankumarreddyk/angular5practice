import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MattextareaRoutingModule } from './mattextarea-routing.module';
import { MattextareaComponent } from './mattextarea/mattextarea.component';
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
  declarations: [MattextareaComponent],
  imports: [
    CommonModule,
    MattextareaRoutingModule,
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
export class MattextareaModule { }
