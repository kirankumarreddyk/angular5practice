import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';
// or
import { ButtonsModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    FormsModule,
    ButtonsModule.forRoot()
  ]
})
export class ButtonModule { }
