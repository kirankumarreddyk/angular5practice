import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowhideRoutingModule } from './showhide-routing.module';
import { ShowhideComponent } from './showhide/showhide.component';

@NgModule({
  declarations: [ShowhideComponent],
  imports: [
    CommonModule,
    ShowhideRoutingModule
  ]
})
export class ShowhideModule { }
