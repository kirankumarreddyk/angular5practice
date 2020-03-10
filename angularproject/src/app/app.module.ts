import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonmenuComponent } from './commonmenu/commonmenu/commonmenu.component';
import { CommonfooterComponent } from './commonfooter/commonfooter/commonfooter.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    CommonmenuComponent,
    CommonfooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// BrowserAnimationsModule applicationCache.module lo add cheyali remaing ekkada chesina apply avvadu

