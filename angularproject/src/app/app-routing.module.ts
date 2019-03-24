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
    path: 'tabss',
    loadChildren: './tabss/tabss.module#TabssModule'
  },
  {
    path: 'showhide',
    loadChildren: './showhide/showhide.module#ShowhideModule'
  },
  {
    path: 'validations',
    loadChildren: './validations/validations.module#ValidationsModule'
  },
  {
    path: 'multiselect',
    loadChildren: './multiselect/multiselect.module#MultiselectModule'
  },
  {
    path: 'focusvalidations',
    loadChildren: './focusvalidations/focusvalidations.module#FocusvalidationsModule'
  },
  {
    path: 'pagetitle',
    loadChildren: './pagetitle/pagetitle.module#PagetitleModule'
  },
  {
    path: 'popup',
    loadChildren: './popup/popup.module#PopupModule'
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
