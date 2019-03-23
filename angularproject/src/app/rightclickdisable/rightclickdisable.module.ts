import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightclickdisableRoutingModule } from './rightclickdisable-routing.module';
import { RightclickdisableComponent } from './rightclickdisable/rightclickdisable.component';

@NgModule({
  declarations: [RightclickdisableComponent],
  imports: [
    CommonModule,
    RightclickdisableRoutingModule
  ]
})
export class RightclickdisableModule { }
