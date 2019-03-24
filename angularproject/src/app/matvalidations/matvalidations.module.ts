import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatvalidationsRoutingModule } from './matvalidations-routing.module';
import { MatvalidationsComponent } from './matvalidations/matvalidations.component';
import { FormsModule } from '@angular/forms';
import { EqualTextDirective } from '../../common/equal.text.directive';
import {
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatCheckboxModule,
  MatSelectModule,
  MatExpansionModule,
} from '@angular/material';
import { from } from 'rxjs';

@NgModule({
  declarations: [MatvalidationsComponent, EqualTextDirective],
  imports: [
    CommonModule,
    MatvalidationsRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    FormsModule
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
export class MatvalidationsModule { }
