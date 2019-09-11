import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadimageComponent } from './uploadimage/uploadimage.component';
const routes: Routes = [
  {
    path: '',
    component: UploadimageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadimageRoutingModule { }
