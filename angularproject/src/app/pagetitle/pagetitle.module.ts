import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagetitleRoutingModule } from './pagetitle-routing.module';
import { PagetitleComponent } from './pagetitle/pagetitle.component';

@NgModule({
  declarations: [PagetitleComponent],
  imports: [
    CommonModule,
    PagetitleRoutingModule
  ]
})
export class PagetitleModule { }
