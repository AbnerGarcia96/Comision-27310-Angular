import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxjsService } from './services/rxjs.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ListaCursosPromiseComponent } from './components/lista-cursos-promise/lista-cursos-promise.component';
import { ListaCursosObservableComponent } from './components/lista-cursos-observable/lista-cursos-observable.component';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosPromiseComponent,
    ListaCursosObservableComponent,
    CursoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    RxjsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
