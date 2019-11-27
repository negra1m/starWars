import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IntroContainerComponent } from './components/intro-container/intro-container.component';
import { IntroComponent } from './pages/intro/intro.component';



@NgModule({
  declarations: [HeaderComponent, IntroContainerComponent, IntroComponent],
  imports: [
    CommonModule
  ]
})
export class IntroModule { }
