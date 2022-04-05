import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesNativasComponent } from './components/pipes-nativas/pipes-nativas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDividerModule } from '@angular/material/divider';
import { ConversorPipe } from './pipes/conversor.pipe';
import { PipePersonalizadoComponent } from './components/pipe-personalizado/pipe-personalizado.component';
import { CursosComponent } from './components/cursos/cursos.component';

import { MatCardModule } from '@angular/material/card';
import { CursoFechaPipe } from './pipes/curso-fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesNativasComponent,
    ConversorPipe,
    PipePersonalizadoComponent,
    CursosComponent,
    CursoFechaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
