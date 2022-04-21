import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: AutenticacionComponent, children:  [
    {path: 'login', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
