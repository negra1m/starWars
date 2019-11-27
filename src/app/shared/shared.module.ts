import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { sharedModules as SharedModules } from "./modules";
import { IconsModule } from "./modules/icons/icons.module";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  imports: [SharedModules, IconsModule],
  declarations: [
    // TODO for components
  ],
  exports: [SharedModules, IconsModule, AppRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
