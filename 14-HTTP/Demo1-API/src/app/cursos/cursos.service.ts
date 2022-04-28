import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, throwError } from 'rxjs';
import { Curso } from '../core/inicio/modelos/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly API_URL = 'https://6265dce1dbee37aff9a94c90.mockapi.io';
  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.API_URL}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }).pipe(catchError(this.manejoError));
  }

  crearCurso(curso: Curso){
    return this.http.post<Curso>(`${this.API_URL}/cursos/`, curso).pipe(catchError(this.manejoError));
  }

  modificarCurso(curso: Curso){
    return this.http.put(`${this.API_URL}/cursos/${curso.id}`, curso);
  }

  eliminarCurso(idCurso: string){
    return this.http.delete<Curso>(`${this.API_URL}/cursos/${idCurso}`).pipe(catchError(this.manejoError));
  }

  private manejoError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error en el frontend:', error.error.message)
    }else{
      console.warn('Error en el backend', error.status, error.message)
    }

    return throwError(() => 'Error de comunicación HTTP');
    
  }
}
