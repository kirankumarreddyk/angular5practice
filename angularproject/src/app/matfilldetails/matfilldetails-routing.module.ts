import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatfilldetailsComponent } from './matfilldetails/matfilldetails.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
path: '',
component: MatfilldetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatfilldetailsRoutingModule { }
