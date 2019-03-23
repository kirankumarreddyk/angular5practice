import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonmenuRoutingModule } from './commonmenu-routing.module';
import { CommonmenuComponent } from './commonmenu/commonmenu.component';

@NgModule({
  declarations: [CommonmenuComponent],
  imports: [
    CommonModule,
    CommonmenuRoutingModule
  ]
})
export class CommonmenuModule { }
