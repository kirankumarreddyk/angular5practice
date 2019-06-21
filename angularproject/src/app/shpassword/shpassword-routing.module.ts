import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShpasswordComponent } from './shpassword/shpassword.component';
const routes: Routes = [
  {
    path: '',
    component: ShpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShpasswordRoutingModule { }
