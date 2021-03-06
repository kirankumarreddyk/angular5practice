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
    path: 'hidevalidation',
    loadChildren: './hidevalidation/hidevalidation.module#HidevalidationModule'
  },
  {
    path: 'addeditdelete',
    loadChildren: './addeditdelete/addeditdelete.module#AddeditdeleteModule'
  },
  {
    path: 'matradio',
    loadChildren: './matradio/matradio.module#MatradioModule'
  },
  {
    path: 'mataccordian',
    loadChildren: './mataccordian/mataccordian.module#MataccordianModule'
  },
  {
    path: 'matcheckbox',
    loadChildren: './matcheckbox/matcheckbox.module#MatcheckboxModule'
  },
  {
    path: 'matinput',
    loadChildren: './matinput/matinput.module#MatinputModule'
  },
  {
    path: 'matselectbox',
    loadChildren: './matselectbox/matselectbox.module#MatselectboxModule'
  },
  {
    path: 'mattextarea',
    loadChildren: './mattextarea/mattextarea.module#MattextareaModule'
  },
  {
    path: 'mattabs',
    loadChildren: './mattabs/mattabs.module#MattabsModule'
  },
  {
    path: 'matgrid',
    loadChildren: './matgrid/matgrid.module#MatgridModule'
  },
  {
    path: 'inputshowhide',
    loadChildren: './inputshowhide/inputshowhide.module#InputshowhideModule'
  },
  {
    path: 'listgrid',
    loadChildren: './listgrid/listgrid.module#ListgridModule'
  },
  {
    path: 'matloading',
    loadChildren: './matloading/matloading.module#MatloadingModule'
  },
  {
    path: 'pagefromto',
    loadChildren: './pagefromto/pagefromto.module#PagefromtoModule'
  },
  {
    path: 'matfilldetails',
    loadChildren: './matfilldetails/matfilldetails.module#MatfilldetailsModule'
  },
  {
    path: 'matvalidations',
    loadChildren: './matvalidations/matvalidations.module#MatvalidationsModule'
  },
  {
    path: 'inputconfirmpaswd',
    loadChildren: './inputconfirmpaswd/inputconfirmpaswd.module#InputconfirmpaswdModule'
  },
  {
    path: '',
    loadChildren: './sliders/sliders.module#SlidersModule'
  },
  {
    path: 'dropdowncounts',
    loadChildren: './dropdowncounts/dropdowncounts.module#DropdowncountsModule'
  },
  {
    path: 'alerts',
    loadChildren: './alerts/alerts.module#AlertsModule'
  },
 
  {
    path: 'button',
    loadChildren: './button/button.module#ButtonModule'
  },
   {
    path: 'disabledsubmit',
    loadChildren: './disabledsubmit/disabledsubmit.module#DisabledsubmitModule'
  },
  {
    path: 'checkdisabled',
    loadChildren: './checkdisabled/checkdisabled.module#CheckdisabledModule'
  },
  {
    path: 'clickevent',
    loadChildren: './clickevent/clickevent.module#ClickeventModule'
  },
    {
    path: 'clickevent/:id',
    loadChildren: './clickevent/clickevent.module#ClickeventModule'
  }, 
  {
    path: 'shpassword',
    loadChildren: './shpassword/shpassword.module#ShpasswordModule'
  },
  {
    path: 'elseif',
    loadChildren: './elseif/elseif.module#ElseifModule'
  },
  {
    path: 'print',
    loadChildren: './print/print.module#PrintModule'
  },
  {
    path: 'ngifngfor',
    loadChildren: './ngifngfor/ngifngfor.module#NgifngforModule'
  },
  {
    path: 'ngtemplate',
    loadChildren: './ngtemplate/ngtemplate.module#NgtemplateModule'
  },
  {
    path: 'scrollspy',
    loadChildren: './scrollspy/scrollspy.module#ScrollspyModule'
  },
  {
    path: 'reactiveformvalidation',
    loadChildren: './reactiveformvalidation/reactiveformvalidation.module#ReactiveformvalidationModule'
  },
  {
    path: 'uploadimage',
    loadChildren: './uploadimage/uploadimage.module#UploadimageModule'
  },
  {
    path: 'dependencyinjection',
    loadChildren: './dependencyinjection/dependencyinjection.module#DependencyinjectionModule'
  },
   {
    path: 'allownumbers',
    loadChildren: './allownumbers/allownumbers.module#AllownumbersModule'
  },
    {
    path: 'getresponse',
    loadChildren: './getresponse/getresponse.module#GetresponseModule'
  },
     {
    path: 'registrationdetails',
    loadChildren: './registrationdetails/registrationdetails.module#RegistrationdetailsModule'
  },
     {
    path: 'inputsearch',
    loadChildren: './inputsearch/inputsearch.module#InputsearchModule'
  },
       {
    path: 'tabrouting',
    loadChildren: './tabrouting/tabrouting.module#TabroutingModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
