import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdowncountsComponent } from './dropdowncounts/dropdowncounts.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
path: '',
component: DropdowncountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdowncountsRoutingModule { }
