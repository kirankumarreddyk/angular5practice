import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { from } from 'rxjs';
const routes: Routes = [
{
  path: '',
  component: PagetitleComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagetitleRoutingModule { }
