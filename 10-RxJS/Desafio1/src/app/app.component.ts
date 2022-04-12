import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { DatosService } from './services/datos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  datos: any[] = [];
  datos$!: Observable<any>
  datosSuscripcion!: any;

  constructor(
    private datosService: DatosService
  ){}

  ngOnInit(){
    this.datos$ = this.datosService.obtenerDatosObservable();
    this.datosSuscripcion = this.datos$.subscribe((datos) => {
      this.datos = datos;
    });  
  }

  ngOnDestroy(): void {
    this.datosSuscripcion.unsubscribe();
  }
}
