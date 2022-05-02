import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL_API = 'https://6265dce1dbee37aff9a94c90.mockapi.io';

  constructor(
    private http: HttpClient
  ) { }

  login(correo: string, contrasena: string){
    return this.http.get<Usuario[]>(`${this.URL_API}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter(u => u.correo === correo && u.contrasena === contrasena)[0];
      })
    )
  }
}
