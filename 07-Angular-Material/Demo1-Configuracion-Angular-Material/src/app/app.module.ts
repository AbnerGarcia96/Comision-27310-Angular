import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { CardComponent } from './components/card/card.component';
import { BotonesComponent } from './components/botones/botones.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ContenidoDialogoComponent } from './components/contenido-dialogo/contenido-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BotonesComponent,
    FormularioComponent,
    DialogoComponent,
    TablaComponent,
    ContenidoDialogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
