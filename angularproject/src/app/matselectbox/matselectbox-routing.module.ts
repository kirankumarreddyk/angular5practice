import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatselectboxComponent } from './matselectbox/matselectbox.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
path: '',
component: MatselectboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatselectboxRoutingModule { }
