/**
 * App Bootstraping configuration
 */

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { APP_BASE_HREF } from "@angular/common";

/**
 * Imports
 */
import { FeatherModule } from "angular-feather";
import { VolumeX, Volume2, ArrowRight } from "angular-feather/icons";
import { sharedModules } from "./shared/modules";
import { IntroModule } from "./modules/intro/intro.module";

import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./modules/main/components/header/header.component";
import { PainelComponent } from "./modules/main/components/painel/painel.component";

const icons = {
  VolumeX,
  Volume2,
  ArrowRight
};

@NgModule({
  declarations: [AppComponent, HeaderComponent, PainelComponent],
  imports: [
    BrowserModule,
    IntroModule,
    FeatherModule.pick(icons),
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
