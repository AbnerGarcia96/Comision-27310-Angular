import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.apiURL}/cursos`);
  }
}
