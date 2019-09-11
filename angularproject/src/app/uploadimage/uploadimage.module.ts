import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadimageRoutingModule } from './uploadimage-routing.module';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
@NgModule({
  declarations: [UploadimageComponent],
  imports: [
    CommonModule,
    UploadimageRoutingModule,
    HttpClientModule
  ]
})
export class UploadimageModule { }
