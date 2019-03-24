import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatgridComponent } from './matgrid/matgrid.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: MatgridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatgridRoutingModule { }
