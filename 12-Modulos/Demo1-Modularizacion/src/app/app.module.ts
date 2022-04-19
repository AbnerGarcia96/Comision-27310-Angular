import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutenticacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
