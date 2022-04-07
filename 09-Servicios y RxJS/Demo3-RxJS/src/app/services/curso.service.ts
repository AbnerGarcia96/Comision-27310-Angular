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
  private cursoObservable: Observable<Curso[]>;
  private cursoSubject: Subject<Curso[]>;
  
  constructor(){
    this.cursoSubject = new Subject();
    this.cursoObservable = new Observable((suscripcion) => {
      suscripcion.next(this.cursos);
    });
  }

  obtenerCursosPromise(){
    let p = new Promise((resolve, reject) => {
      const error = false;

      if(!error){
        resolve(this.cursos);
      }else{
        reject('Hubo un error');
      }
    });

    return p;
  }

  obtenerCursosObservable(){
    return this.cursoObservable;
  }

  eliminarCurso(id: number){
    let filtrado: Curso[] = []
    filtrado = this.cursos.filter((valor) => {
      if(valor.id != id){
        return valor;
      }else{
        return undefined;
      }
    });
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursoSubject.next(this.cursos);
  }
}
