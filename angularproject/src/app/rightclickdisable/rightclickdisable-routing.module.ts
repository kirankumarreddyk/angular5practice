import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RightclickdisableComponent } from './rightclickdisable/rightclickdisable.component';
import { from } from 'rxjs';
const routes: Routes = [
{
  path: '',
  component : RightclickdisableComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightclickdisableRoutingModule { }
