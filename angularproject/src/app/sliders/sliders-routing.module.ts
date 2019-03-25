import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidersComponent } from './sliders/sliders.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: SlidersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlidersRoutingModule { }
