import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlinkingtextRoutingModule } from './blinkingtext-routing.module';
import { BlinkingtextComponent } from './blinkingtext/blinkingtext.component';

@NgModule({
  declarations: [BlinkingtextComponent],
  imports: [
    CommonModule,
    BlinkingtextRoutingModule
  ]
})
export class BlinkingtextModule { }
