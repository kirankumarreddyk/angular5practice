import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadernameComponent } from './headername/headername.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: HeadernameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadernameRoutingModule { }
