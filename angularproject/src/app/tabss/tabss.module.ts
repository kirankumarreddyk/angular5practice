import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabssRoutingModule } from './tabss-routing.module';
import { TabssComponent } from './tabss/tabss.component';

@NgModule({
  declarations: [TabssComponent],
  imports: [
    CommonModule,
    TabssRoutingModule
  ]
})
export class TabssModule { }
