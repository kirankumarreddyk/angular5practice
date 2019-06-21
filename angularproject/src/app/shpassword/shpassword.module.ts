import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShpasswordRoutingModule } from './shpassword-routing.module';
import { ShpasswordComponent } from './shpassword/shpassword.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
//2
import { NgxPasswordToggleModule } from 'ngx-password-toggle';
//2
@NgModule({
  declarations: [ShpasswordComponent],
  imports: [
    CommonModule,
    ShpasswordRoutingModule,
    FormsModule,
    MatFormFieldModule,
    NgxPasswordToggleModule
  ]
})
export class ShpasswordModule { }


// npm i ngx-password-toggle