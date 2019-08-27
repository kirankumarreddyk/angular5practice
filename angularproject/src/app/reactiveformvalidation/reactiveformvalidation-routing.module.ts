import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformvalidationComponent} from './reactiveformvalidation/reactiveformvalidation.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component:ReactiveformvalidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveformvalidationRoutingModule { }
