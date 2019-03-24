import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditdeleteComponent } from './addeditdelete/addeditdelete.component';
const routes: Routes = [
  {
path: '',
component: AddeditdeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddeditdeleteRoutingModule { }
