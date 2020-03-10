import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabssRoutingModule } from './tabss-routing.module';
import { TabssComponent } from './tabss/tabss.component';
import { MatTabsModule } from '@angular/material';
import { TabsModule } from 'ngx-bootstrap'; //1
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"; //2
import { from } from 'rxjs';



@NgModule({
  declarations: [TabssComponent],
  imports: [
    CommonModule,
    TabssRoutingModule,
    MatTabsModule,
    TabsModule.forRoot(), //1
    NgbModule, //2
  ]
})
export class TabssModule { }

//1
// ng add ngx - bootstrap--component tabs
//https://valor-software.com/ngx-bootstrap/#/tabs
//1

//2
// npm install --save @ng-bootstrap/ng-bootstrap
//2




// https://material.angular.io/components/tabs/examples
