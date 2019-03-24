import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagefromtoComponent } from './pagefromto/pagefromto.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: PagefromtoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagefromtoRoutingModule { }
