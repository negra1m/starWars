/**
 * App Bootstraping configuration
 */

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

/**
 * Imports
 */
import { sharedModules } from "./shared/modules";
import { IntroModule } from "./modules/intro-page/intro.module";
import { AppRoutingModule } from "./app-routing.module";
import { MainModule } from "./modules/main-page/main.module";
import { IconsModule } from "./shared/modules/icons";

/**
 * Services
 */
import { SwApiService } from "./core/services/sw-api.service";
import { DefaultUrlSerializer, UrlTree, UrlSerializer } from "@angular/router";

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    return super.parse(url.toLowerCase());
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IntroModule,
    MainModule,
    sharedModules,
    IconsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    },
    SwApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
