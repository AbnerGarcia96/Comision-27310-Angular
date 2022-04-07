import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoBetaService {
  cursos: Curso[] = [
    {id:1, nombre: '[Beta] Angular', descripcion: 'Curso de Angular para principantes'},
    {id:2, nombre: '[Beta] ReactJS', descripcion: 'Curso de ReactJS intermedio'},
    {id:3, nombre: '[Beta] VueJS', descripcion: 'Curso de VueJS avanzado'}
  ];
  
  constructor() { }

  obtenerCursos(){
    return this.cursos;
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);

    return this.cursos;
  }

  eliminarCurso(id: number){
    for(let i=0; i<this.cursos.length; i++){
      if(this.cursos[i].id == id){
        this.cursos.splice(i, 1);
      }
    }

    return this.cursos;
  }
}
