import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickeventComponent } from './clickevent/clickevent.component';
const routes: Routes = [
  {
    path: '',
    component: ClickeventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickeventRoutingModule { }
