import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  login(correo: string, contrasena: string): Observable<Usuario>{
    return this.http.get<Usuario[]>(`${environment.apiURL}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter(usuario => usuario.correo === correo && usuario.contrasena === contrasena)[0]
      })
    );
  }

  logout(){

  }
}
