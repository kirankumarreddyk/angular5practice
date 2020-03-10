import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabroutingRoutingModule } from './tabrouting-routing.module';
import { TabroutingComponent } from './tabrouting/tabrouting.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material';
@NgModule({
  declarations: [TabroutingComponent, HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    TabroutingRoutingModule,
    MatTabsModule, RouterModule.forChild([
    { path: '', component: TabroutingComponent, children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: HomeComponent, data: { label: 'Home' } },
      { path: 'about', component: AboutComponent, data: { label: 'Food' } }
    ] }
  ])
  ]
})
export class TabroutingModule { }
