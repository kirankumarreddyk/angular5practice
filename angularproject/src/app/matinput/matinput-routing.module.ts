import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatinputComponent } from './matinput/matinput.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: MatinputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatinputRoutingModule { }
