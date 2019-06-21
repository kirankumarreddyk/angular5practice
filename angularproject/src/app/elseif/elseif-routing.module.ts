import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElseifComponent } from './elseif/elseif.component';
const routes: Routes = [
  {
    path: '',
    component: ElseifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElseifRoutingModule { }
