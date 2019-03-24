import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FocusvalidationsComponent } from './focusvalidations/focusvalidations.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: FocusvalidationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FocusvalidationsRoutingModule { }
