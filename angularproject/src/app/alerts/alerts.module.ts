import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    AlertsRoutingModule,
    AlertModule.forRoot()
  ]
})
export class AlertsModule { }
