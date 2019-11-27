import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { sharedModules as SharedModules } from './modules';

@NgModule({
  imports: [
    SharedModules,
  ],
  declarations: [
    // TODO for components
  ],
  exports: [SharedModules],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
