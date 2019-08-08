import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgtemplateRoutingModule } from './ngtemplate-routing.module';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';

@NgModule({
  declarations: [NgtemplateComponent],
  imports: [
    CommonModule,
    NgtemplateRoutingModule
  ]
})
export class NgtemplateModule { }
