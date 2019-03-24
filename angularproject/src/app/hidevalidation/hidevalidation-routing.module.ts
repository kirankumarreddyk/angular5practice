import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HidevalidationComponent } from './hidevalidation/hidevalidation.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: HidevalidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HidevalidationRoutingModule { }
