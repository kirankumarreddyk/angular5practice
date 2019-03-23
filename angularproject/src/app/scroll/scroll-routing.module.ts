import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollComponent } from './scroll/scroll.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component : ScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollRoutingModule { }
