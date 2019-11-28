import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { HeaderComponent } from "./components/header/header.component";
import { PanelComponent } from "./components/panel/panel.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [MainComponent, HeaderComponent, PanelComponent],
  imports: [CommonModule, SharedModule]
})
export class MainModule {}
