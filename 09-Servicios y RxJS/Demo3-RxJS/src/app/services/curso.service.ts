import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {id: 1, nombre: "Angular", descripcion:"Curso de Angular para principiantes"},
    {id: 2, nombre: "ReactJS", descripcion:"Curso de ReactJS intermedio"},
    {id: 3, nombre: "React Native", descripcion:"Curso de React Native avanzado"},
  ];
}
