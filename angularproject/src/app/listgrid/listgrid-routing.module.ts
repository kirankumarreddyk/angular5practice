import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListgridComponent } from './listgrid/listgrid.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
path: '',
component: ListgridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListgridRoutingModule { }
