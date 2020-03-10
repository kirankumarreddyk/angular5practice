import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabroutingComponent } from './tabrouting/tabrouting.component';
const routes: Routes = [
  {
    path: '',
    component: TabroutingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabroutingRoutingModule { }
