import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FocusvalidationsRoutingModule } from './focusvalidations-routing.module';
import { FocusvalidationsComponent } from './focusvalidations/focusvalidations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AccessibleForm } from './focusvalidations/focusdirective';
@NgModule({
  declarations: [FocusvalidationsComponent,AccessibleForm],
  imports: [
    CommonModule,
    FocusvalidationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AccessibleForm]
})
export class FocusvalidationsModule { }
