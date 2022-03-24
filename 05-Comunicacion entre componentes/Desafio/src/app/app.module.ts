import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteHijoComponent } from './components/componente-hijo/componente-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
