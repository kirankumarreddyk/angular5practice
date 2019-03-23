import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'capcha',
    loadChildren: './capcha/capcha.module#CapchaModule'
  },
  {
    path: 'blinkingtext',
    loadChildren: './blinkingtext/blinkingtext.module#BlinkingtextModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
