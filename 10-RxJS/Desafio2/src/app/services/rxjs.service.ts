import { Injectable } from '@angular/core';
import { filter, from, map, Observable, of } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  datos: Persona[] = [
    {
      id: 1,
      nombre: 'Juan',
      edad: 40
    },
    {
      id: 2,
      nombre: 'Sandra',
      edad: 20
    },
    {
      id: 3,
      nombre: 'Marta',
      edad: 30
    },
  ];

  datos$: Observable<Persona[]>;

  constructor(){
    this.datos$ = of(this.datos);
  }

  obtenerDatos(): Observable<Persona[]>{
    return this.datos$;
  }

  obtenerDatosFiltrados(): Observable<Persona[]> {
    return this.datos$.pipe(
      map(personas => personas.filter(persona => persona.edad > 25))
    );
  }
  
}
