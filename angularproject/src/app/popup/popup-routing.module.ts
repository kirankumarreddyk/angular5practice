import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '',
    component: PopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupRoutingModule { }
