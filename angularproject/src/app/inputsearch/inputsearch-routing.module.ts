import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsearchComponent } from './inputsearch/inputsearch.component';
const routes: Routes = [
  {
    path: '',
    component: InputsearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputsearchRoutingModule { }
