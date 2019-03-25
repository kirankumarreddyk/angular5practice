import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiselectRoutingModule } from './multiselect-routing.module';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { FormsModule} from '@angular/forms'
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { from } from 'rxjs';
@NgModule({
  declarations: [MultiselectComponent],
  imports: [
    CommonModule,
    MultiselectRoutingModule,
    FormsModule,
    MultiselectDropdownModule
  ]
})
export class MultiselectModule { }


// npm install angular - 2 - dropdown - multiselect--save (or) npm install angular-2-dropdown-multiselect --save