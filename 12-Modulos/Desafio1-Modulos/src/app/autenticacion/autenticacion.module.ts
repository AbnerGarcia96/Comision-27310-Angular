import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ]
})
export class AutenticacionModule { }
