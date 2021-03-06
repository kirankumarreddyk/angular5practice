import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgifngforComponent } from './ngifngfor/ngifngfor.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: NgifngforComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgifngforRoutingModule { }
