import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllownumberComponent } from './allownumbers/allownumbers.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: AllownumberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllownumbersRoutingModule { }
