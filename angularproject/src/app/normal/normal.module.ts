import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRoutingModule } from './normal-routing.module';
import { NormalComponent, ApppComponent } from './normal/normal.component';
import { FormsModule } from '@angular/forms'


import {MatDialogModule} from '@angular/material/dialog'; 
@NgModule({
  declarations: [NormalComponent
  , ApppComponent
  ],
  imports: [
    CommonModule,
    NormalRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [ApppComponent]
})
export class NormalModule { }
