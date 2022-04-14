import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuario(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
