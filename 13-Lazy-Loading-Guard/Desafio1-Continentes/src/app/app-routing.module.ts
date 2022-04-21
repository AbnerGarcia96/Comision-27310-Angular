import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch:'full' },
  {
    path: 'america',
    loadChildren: () => import('./america/america.module').then((m) => m.AmericaModule)
  },
  {
    path: 'europa',
    loadChildren: () => import('./europa/europa.module').then((m) => m.EuropaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
