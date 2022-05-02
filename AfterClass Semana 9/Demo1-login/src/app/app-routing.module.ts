import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './autenticacion/admin.guard';
import { AuthGuard } from './autenticacion/auth.guard';
import { CursosComponent } from './core/cursos/cursos.component';
import { InicioAdminComponent } from './core/inicio-admin/inicio-admin.component';
import { InicioComponent } from './core/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent, canActivate: [AuthGuard] },
  {path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
  {path: 'admin', component: InicioAdminComponent, canActivate: [AuthGuard, AdminGuard] },
  {
    path:'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
