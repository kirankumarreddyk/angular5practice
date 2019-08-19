import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component : ScrollspyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollspyRoutingModule { }
