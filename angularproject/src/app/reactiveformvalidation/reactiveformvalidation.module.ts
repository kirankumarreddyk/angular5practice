import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveformvalidationRoutingModule } from './reactiveformvalidation-routing.module';
import { ReactiveformvalidationComponent } from './reactiveformvalidation/reactiveformvalidation.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ReactiveformvalidationComponent],
  imports: [
    CommonModule,
    ReactiveformvalidationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveformvalidationModule { }
