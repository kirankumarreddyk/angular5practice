import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputconfirmpaswdComponent } from './inputconfirmpaswd/inputconfirmpaswd.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
path: '',
component: InputconfirmpaswdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputconfirmpaswdRoutingModule { }
