import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatradioComponent } from './matradio/matradio.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: MatradioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatradioRoutingModule { }
