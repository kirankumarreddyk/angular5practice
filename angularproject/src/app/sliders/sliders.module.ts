import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidersRoutingModule } from './sliders-routing.module';
import { SlidersComponent } from './sliders/sliders.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
@NgModule({
  declarations: [SlidersComponent],
  imports: [
    CommonModule,
    SlidersRoutingModule,
    NgxCarouselModule
  ]
})
export class SlidersModule { }

// npm i ngx - carousel--save (or) npm install ngx-carousel --save
// npm i angular - hammer--save (or) npm install --save angular-hammer


//sliders
// https://valor-software.com/ngx-bootstrap/#/carousel
