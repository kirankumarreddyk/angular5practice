import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonfooterRoutingModule } from './commonfooter-routing.module';
import { CommonfooterComponent } from './commonfooter/commonfooter.component';

@NgModule({
  declarations: [CommonfooterComponent],
  imports: [
    CommonModule,
    CommonfooterRoutingModule
  ]
})
export class CommonfooterModule { }
