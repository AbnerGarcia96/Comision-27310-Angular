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
  
}
