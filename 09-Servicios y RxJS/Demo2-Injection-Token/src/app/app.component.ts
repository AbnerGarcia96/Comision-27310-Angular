import { Component, Inject } from '@angular/core';
import { API, CONFIG } from 'src/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlAPI!: string;

  constructor(
    @Inject(CONFIG) configuracion: API
  ) {
    console.log(configuracion);
    this.urlAPI = configuracion.url;
  } 
}
