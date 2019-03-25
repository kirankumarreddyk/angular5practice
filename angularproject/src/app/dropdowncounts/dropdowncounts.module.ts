import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdowncountsRoutingModule } from './dropdowncounts-routing.module';
import { DropdowncountsComponent } from './dropdowncounts/dropdowncounts.component';
import { FormsModule } from '@angular/forms';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ToastrModule } from 'ngx-toastr';

import { from } from 'rxjs';
@NgModule({
  declarations: [DropdowncountsComponent],
  imports: [
    CommonModule,
    DropdowncountsRoutingModule,
    FormsModule,
    MultiselectDropdownModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton: true
    }),
  ]
})
export class DropdowncountsModule { }


//npm install ngx-toastr --save