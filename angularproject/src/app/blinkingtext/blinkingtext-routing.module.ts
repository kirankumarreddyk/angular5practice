import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlinkingtextComponent } from './blinkingtext/blinkingtext.component';
import { from } from 'rxjs';
const routes: Routes = [
{
  path: '',
  component : BlinkingtextComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlinkingtextRoutingModule { }
