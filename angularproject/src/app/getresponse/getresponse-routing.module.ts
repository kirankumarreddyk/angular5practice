import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetresponseComponent } from './getresponse/getresponse.component';
const routes: Routes = [
  {
    path: '',
    component: GetresponseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetresponseRoutingModule { }
