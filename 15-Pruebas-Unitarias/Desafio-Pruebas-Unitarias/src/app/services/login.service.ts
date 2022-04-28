import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(correo: string, contrasena: string){
    return this.http.get<Usuario[]>('https://6265dce1dbee37aff9a94c90.mockapi.io/usuarios').pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter(u => u.correo === correo && u.contrasena === contrasena)
      })
    )
  }

  logout(): any{
    return {
      mensaje: 'Usuario salio de la sesion'
    }
  }
}
