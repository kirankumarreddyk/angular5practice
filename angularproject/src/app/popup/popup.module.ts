import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupRoutingModule } from './popup-routing.module';
import { PopupComponent } from './popup/popup.component';
import { ModalModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
// hover tooltip
import { TooltipModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    PopupRoutingModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot()
  ]
})
export class PopupModule { }



// https://valor-software.com/ngx-bootstrap/#/modals


//popover
// ng add ngx-bootstrap  --component progressbar
// https://valor-software.com/ngx-bootstrap/#/progressbar

// hover tooltip
// ng add ngx - bootstrap--component tooltip
// https://valor-software.com/ngx-bootstrap/#/tooltip
