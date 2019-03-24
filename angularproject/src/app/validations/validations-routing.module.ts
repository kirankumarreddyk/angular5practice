import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationsComponent } from './validations/validations.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: ValidationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationsRoutingModule { }
