import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MattabsComponent } from './mattabs/mattabs.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: MattabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MattabsRoutingModule { }
