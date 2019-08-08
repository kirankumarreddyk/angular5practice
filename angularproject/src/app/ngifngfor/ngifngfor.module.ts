import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgifngforRoutingModule } from './ngifngfor-routing.module';
import { NgifngforComponent } from './ngifngfor/ngifngfor.component';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [NgifngforComponent],
  imports: [
    CommonModule,
    NgifngforRoutingModule,
    FormsModule
  ]
})
export class NgifngforModule { }
