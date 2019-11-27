import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroComponent } from './modules/intro/pages/intro/intro.component';


const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  // { path: '/intro', component: IntroComponent }
  // {
  // path: 'settings',
  // loadChildren: () => import('./').then(m => m.SettingsModule),
  // canActivate: [ AuthGuard ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
