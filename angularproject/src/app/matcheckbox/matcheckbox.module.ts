import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatcheckboxRoutingModule } from './matcheckbox-routing.module';
import { MatcheckboxComponent } from './matcheckbox/matcheckbox.component';
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
  declarations: [MatcheckboxComponent],
  imports: [
    CommonModule,
    MatcheckboxRoutingModule,
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

export class MatcheckboxModule { }
