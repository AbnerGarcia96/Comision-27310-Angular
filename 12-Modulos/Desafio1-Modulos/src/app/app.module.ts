import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { InicioComponent } from './core/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AutenticacionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
