
/**
 * App Bootstraping configuration
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

/**
 * Imports
 */
import { FeatherModule } from 'angular-feather';
import { VolumeX, ArrowRight } from 'angular-feather/icons';
const icons = {
  VolumeX,
  ArrowRight
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherModule.pick(icons)
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
