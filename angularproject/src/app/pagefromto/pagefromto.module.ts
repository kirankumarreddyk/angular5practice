import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagefromtoRoutingModule } from './pagefromto-routing.module';
import { PagefromtoComponent } from './pagefromto/pagefromto.component';
import { PaginationModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [PagefromtoComponent],
  imports: [
    CommonModule,
    PagefromtoRoutingModule,
    PaginationModule.forRoot()
  ]
})
export class PagefromtoModule { }

// ng add ngx-bootstrap  --component pagination
// https://valor-software.com/ngx-bootstrap/#/pagination