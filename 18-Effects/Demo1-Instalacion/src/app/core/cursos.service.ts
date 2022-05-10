import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly urlApi = 'https://6265dce1dbee37aff9a94c90.mockapi.io';

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(){
    return this.http.get<Curso[]>(`${this.urlApi}/cursos`).pipe(delay(1500));
  }
}
