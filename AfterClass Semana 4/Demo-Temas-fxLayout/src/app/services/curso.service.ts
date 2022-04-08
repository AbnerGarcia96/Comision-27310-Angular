import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursoObservable: Observable<any>;
  private cursoSubject: Subject<any>;
  private cursos: Array<{
    id: number,
    nombre: string,
    camada: string,
    descripcion: string
  }> = [
    {id: 1, nombre: "Angular", camada: "14390", descripcion: "Curso de Angular para desarrollo web"},
    {id: 2, nombre: "ReactJS", camada: "14391", descripcion: "Curso de ReactJS para desarrollo web"},
    {id: 3, nombre: "VueJS", camada: "14392", descripcion: "Curso de VueJS para desarrollo web"},
    {id: 4, nombre: "TypeScript", camada: "14393", descripcion: "Curso de TypeScript para desarrollo web"},
    {id: 5, nombre: "RxJS", camada: "14394", descripcion: "Curso de RxJS para desarrollo web"},
    {id: 6, nombre: "JavaScript", camada: "14395", descripcion: "Curso de JavaScript para desarrollo web"},
  ];

  constructor() {
    this.cursoObservable = new Observable((suscripcion) => {
      suscripcion.next(this.cursos);
    });
    this.cursoSubject = new Subject();
  }

  obtenerObsevable(){
    return this.cursoObservable;
  }

  modificarCurso(curso: any){
    for(let i=0; i<this.cursos.length; i++){
      if(this.cursos[i].id == curso.id){
        this.cursos[i].descripcion = curso.descripcion + " Modificado"
      }
    }
    this.cursoSubject.next(this.cursos);
  }
}
