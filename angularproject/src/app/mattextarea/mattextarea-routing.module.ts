import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MattextareaComponent} from './mattextarea/mattextarea.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: MattextareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MattextareaRoutingModule { }
