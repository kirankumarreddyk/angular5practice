import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: LeftmenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeftmenuRoutingModule { }
