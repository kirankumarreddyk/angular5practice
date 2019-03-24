import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadernameRoutingModule } from './headername-routing.module';
import { HeadernameComponent } from './headername/headername.component';
import { FormsModule } from '@angular/forms'
import { TypeaheadModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [HeadernameComponent],
  imports: [
    CommonModule,
    HeadernameRoutingModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ]
})
export class HeadernameModule { }


// ng add ngx - bootstrap--component typeahead

// https://valor-software.com/ngx-bootstrap/#/typeahead