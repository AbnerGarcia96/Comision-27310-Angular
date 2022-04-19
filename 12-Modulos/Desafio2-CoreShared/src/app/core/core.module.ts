import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';
import { RegistroCursoModule } from '../registro-curso/registro-curso.module';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    AppMaterialModule,
    RegistroCursoModule
  ]
})
export class CoreModule { }
