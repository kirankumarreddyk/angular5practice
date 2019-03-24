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
    path: 'leftmenu',
    loadChildren: './leftmenu/leftmenu.module#LeftmenuModule'
  },
  {
    path: 'scroll',
    loadChildren: './scroll/scroll.module#ScrollModule'
  },
  {
    path: 'rightclickdisable',
    loadChildren: './rightclickdisable/rightclickdisable.module#RightclickdisableModule'
  },
  {
    path: 'accordian',
    loadChildren: './accordian/accordian.module#AccordianModule'
  },
  {
    path: 'datepicker',
    loadChildren: './datepicker/datepicker.module#DatepickerModule'
  },
  {
    path: 'headername',
    loadChildren: './headername/headername.module#HeadernameModule'
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
