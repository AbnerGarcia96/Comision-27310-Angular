import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionService } from './core/autenticacion.service';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './core/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './core/cursos/cursos.component';
import { InicioAdminComponent } from './core/inicio-admin/inicio-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CursosComponent,
    InicioAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AutenticacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
