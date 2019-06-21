import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckdisabledComponent } from './checkdisabled/checkdisabled.component';
const routes: Routes = [
  {
    path: '',
    component: CheckdisabledComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckdisabledRoutingModule { }
