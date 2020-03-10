import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetresponseRoutingModule } from './getresponse-routing.module';
import { GetresponseComponent } from './getresponse/getresponse.component';
import { HttpClientModule } from '@angular/common/http';
import { GetresponseService } from './getresponse/getresponse.service';
@NgModule({
  declarations: [GetresponseComponent],
  imports: [
    CommonModule,
    GetresponseRoutingModule,
    HttpClientModule
  ],
  providers: [GetresponseService]
})
export class GetresponseModule { }
