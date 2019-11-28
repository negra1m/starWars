import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";

import { IntroHeaderComponent } from "./components/header/intro-header.component";
import { IntroContainerComponent } from "./components/intro-container/intro-container.component";
import { IntroComponent } from "./intro.component";
import { PanelComponent } from "./components/panel/panel.component";

@NgModule({
  declarations: [
    IntroHeaderComponent,
    IntroContainerComponent,
    IntroComponent,
    PanelComponent
  ],
  imports: [CommonModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntroModule {}
