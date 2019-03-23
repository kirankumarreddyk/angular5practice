import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftmenuRoutingModule } from './leftmenu-routing.module';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';

@NgModule({
  declarations: [LeftmenuComponent],
  imports: [
    CommonModule,
    LeftmenuRoutingModule
  ]
})
export class LeftmenuModule { }
