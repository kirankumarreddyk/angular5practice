import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatcheckboxComponent } from './matcheckbox/matcheckbox.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
path: '',
component: MatcheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatcheckboxRoutingModule { }
