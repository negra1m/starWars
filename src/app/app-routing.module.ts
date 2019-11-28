import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroComponent } from "./modules/intro-page/intro.component";
import { MainComponent } from "./modules/main-page/main.component";

const routes: Routes = [
  { path: "", redirectTo: "/intro", pathMatch: "full" },
  { path: "intro", component: IntroComponent },
  { path: "main/:side", component: MainComponent }

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
export class AppRoutingModule {}
