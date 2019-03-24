import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputconfirmpaswdRoutingModule } from './inputconfirmpaswd-routing.module';
import { InputconfirmpaswdComponent } from './inputconfirmpaswd/inputconfirmpaswd.component';
import { FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { EqualTextDirective } from '../../common/equal.text.directive';
@NgModule({
  declarations: [InputconfirmpaswdComponent,EqualTextDirective],
  imports: [
    CommonModule,
    InputconfirmpaswdRoutingModule,
    FormsModule
  ]
})
export class InputconfirmpaswdModule { }
