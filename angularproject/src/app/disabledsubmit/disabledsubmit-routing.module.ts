import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisabledsubmitComponent } from './disabledsubmit/disabledsubmit.component';
const routes: Routes = [
  {
    path: '',
    component: DisabledsubmitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisabledsubmitRoutingModule { }
