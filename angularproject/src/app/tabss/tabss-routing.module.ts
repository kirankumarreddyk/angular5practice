import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabssComponent } from './tabss/tabss.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: TabssComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabssRoutingModule { }
