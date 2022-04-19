import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule
  ]
})
export class AutenticacionModule { }
