import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapchaComponent } from './capcha/capcha.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: CapchaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapchaRoutingModule { }
