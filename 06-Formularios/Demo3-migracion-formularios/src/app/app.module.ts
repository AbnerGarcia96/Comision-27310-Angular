import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioTemplateComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
