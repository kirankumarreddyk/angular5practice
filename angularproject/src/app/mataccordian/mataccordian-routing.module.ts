import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MataccordianComponent } from './mataccordian/mataccordian.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
path: '',
component: MataccordianComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MataccordianRoutingModule { }
