import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollspyRoutingModule } from './scrollspy-routing.module';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { FormsModule } from '@angular/forms';
import { ScrollSpyDirective } from './scrollspy/scrollspy.directive';
import { from } from 'rxjs';
@NgModule({
  declarations: [ScrollspyComponent, ScrollSpyDirective],
  imports: [
    CommonModule,
    ScrollspyRoutingModule,
    FormsModule
  ]
})
export class ScrollspyModule { }


// https://stackblitz.com/edit/angular-scroll-spy
