import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatradioRoutingModule } from './matradio-routing.module';
import { MatradioComponent } from './matradio/matradio.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatCheckboxModule,
  MatSelectModule,
  MatExpansionModule
} from '@angular/material';
@NgModule({
  declarations: [MatradioComponent],
  imports: [
    CommonModule,
    MatradioRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule
  ]
})
export class MatradioModule { }



// style.css @import "~@angular/material/prebuilt-themes/indigo-pink.css";
// npm install--save @angular/material @angular/cdk @angular/animations

// refresh 2 or 3 times


// BrowserAnimationsModule appmodule lo add cheyali remaing ekkada chesina apply avvadu