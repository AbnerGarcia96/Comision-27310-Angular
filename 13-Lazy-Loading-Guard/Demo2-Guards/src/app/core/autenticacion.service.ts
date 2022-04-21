import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarioActual = {
    nombre: 'Abner',
    correo: 'abner@gmail.com',
    rol: 'admin'
  };
  private sesionActiva = true;

  constructor() { }

  obtenerUsuarioActual(){
    return this.usuarioActual;
  }

  obtenerSesionActiva(){
    return this.sesionActiva;
  }
}
