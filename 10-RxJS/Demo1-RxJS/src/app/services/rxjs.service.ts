import { Injectable } from '@angular/core';
import { filter, from, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  cursos: Array<any> = [
    {id: 1, nombre: "Angular", camada: 20000},
    {id: 2, nombre: "Angular", camada: 20001},
    {id: 3, nombre: "Angular", camada: 20002},
    {id: 4, nombre: "Angular", camada: 20003}
  ];
  cursosObservable!: Observable<any>;

  constructor() {
    
  }
}
