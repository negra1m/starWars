import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { sharedModules as SharedModules } from './modules';
import { IconsModule } from './modules/icons/icons.module';

@NgModule({
  imports: [
    SharedModules,
    IconsModule
  ],
  declarations: [
    // TODO for components
  ],
  exports: [SharedModules, IconsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
