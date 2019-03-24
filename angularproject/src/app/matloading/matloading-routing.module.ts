import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatloadingComponent } from './matloading/matloading.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: MatloadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatloadingRoutingModule { }
