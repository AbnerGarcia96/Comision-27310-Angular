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
  cursosPromise!: Promise<any>;
  cursos$: Observable<any>;

  constructor() {
    this.cursos$ = new Observable((suscripcion) => {
      if(this.cursos.length > 0){
        suscripcion.next(this.cursos);
        suscripcion.complete();
      }else{
        suscripcion.error("Obvservable no tiene datos para enviar");
      }
    });

    this.cursosPromise = new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject(this.cursos);
      }
    });

  }

  obtenerCursosPromise(){
    return this.cursosPromise;
  }

  obtenerCursosObservable(){
    return this.cursos$;
  }

  eliminarCurso(id: number){
    for(let i=0; i<this.cursos.length; i++){
      if(this.cursos[i].id == id){
        this.cursos.splice(this.cursos[i], 1);
      }
    }
  }

  modificarCurso(curso: any){
    for(let i=0; i<this.cursos.length; i++){
      if(this.cursos[i].id == curso.id){
        this.cursos[i] = curso;
      }
    }
  }
}
