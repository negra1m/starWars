import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IntroContainerComponent } from './components/intro-container/intro-container.component';
import { IntroComponent } from './pages/intro/intro.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HeaderComponent, IntroContainerComponent, IntroComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class IntroModule { }
