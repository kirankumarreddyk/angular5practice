import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputshowhideRoutingModule } from './inputshowhide-routing.module';
import { InputshowhideComponent } from './inputshowhide/inputshowhide.component';
import { MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
@NgModule({
  declarations: [InputshowhideComponent],
  imports: [
    CommonModule,
    InputshowhideRoutingModule,
    MatRadioModule,
    FormsModule
  ]
})
export class InputshowhideModule { }
