import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { from } from 'rxjs';
const routes: Routes = [
{
  path: '',
  component: MultiselectComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiselectRoutingModule { }
