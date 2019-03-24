import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowhideComponent } from './showhide/showhide.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: ShowhideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowhideRoutingModule { }
