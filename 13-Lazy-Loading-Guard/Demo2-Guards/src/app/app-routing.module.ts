import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/admin.guard';
import { AdminComponent } from './core/admin/admin.component';
import { AuthGuard } from './core/auth.guard';
import { InicioComponent } from './core/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  {
    path: 'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
