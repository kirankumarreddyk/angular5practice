import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsearchRoutingModule } from './inputsearch-routing.module';
import { InputsearchComponent } from './inputsearch/inputsearch.component';
import { InputSearchPipe } from './inputsearch/inputsearch.pipe';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'; // part1
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // part2 //npm i ng2-search-filter --save

@NgModule({
  declarations: [InputsearchComponent,
  InputSearchPipe],
  imports: [
    CommonModule,
    InputsearchRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class InputsearchModule { }
