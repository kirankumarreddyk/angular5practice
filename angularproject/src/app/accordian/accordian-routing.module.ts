import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordianComponent } from './accordian/accordian.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: AccordianComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordianRoutingModule { }
