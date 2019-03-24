import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HidevalidationRoutingModule } from './hidevalidation-routing.module';
import { HidevalidationComponent } from './hidevalidation/hidevalidation.component';
import { FormsModule } from '@angular/forms'
// import { MatRadioModule } from '@angular/material';
// import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { from } from 'rxjs';
@NgModule({
  declarations: [HidevalidationComponent],
  imports: [
    CommonModule,
    HidevalidationRoutingModule,
    FormsModule,
    // MatRadioModule,
    // MultiselectDropdownModule
  ]
})
export class HidevalidationModule { }
