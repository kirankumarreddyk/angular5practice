import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapchaRoutingModule } from './capcha-routing.module';
import { CapchaComponent } from './capcha/capcha.component';
import { FormsModule} from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
@NgModule({
  declarations: [CapchaComponent],
  imports: [
    CommonModule,
    CapchaRoutingModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    FormsModule
  ]
})
export class CapchaModule { }


// validation vachinappudu formmodule import cheyali
// npm i ng-recaptcha --save install cheyali capcha ki
