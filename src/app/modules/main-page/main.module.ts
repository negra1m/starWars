import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { HeaderComponent } from "./components/header/header.component";
import { PanelComponent } from "./components/panel/panel.component";
import { SharedModule } from "../../shared/shared.module";
import { SwApiService } from "src/app/core/services/sw-api.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [MainComponent, HeaderComponent, PanelComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  providers: [SwApiService]
})
export class MainModule {}
