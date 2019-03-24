import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatvalidationsComponent } from './matvalidations/matvalidations.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
path: '',
component: MatvalidationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatvalidationsRoutingModule { }
